"use client";

import Heading from "@/components/heading/heading";
import AlertModal from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImageUpload from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { zodResolver } from "@hookform/resolvers/zod";
import { type Order } from "@prisma/client";
import axios from "axios";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

interface OrderFormProps {
  initialData: Order | null;
}

const formSchema = z.object({});

type OrderFormValues = z.infer<typeof formSchema>;

const OrderForm: React.FC<OrderFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit Order" : "Create Order";
  const description = initialData ? "Edit a order" : "Add a new order";
  const toastMessage = initialData ? "Order updated" : "Order created";
  const action = initialData ? "Saves changes" : "Create";

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {},
  });

  const onSubmit = async (data: OrderFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/orders/${params.orderId}`,
          data
        );
      } else {
        await axios.post(`/api/${params.storeId}/orders`, data);
      }
      router.push(`/${params.storeId}/orders`);
      router.refresh();
      toast.success(toastMessage);
    } catch (error) {
      toast.error("Failed to save changes");
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/orders/${params.orderId}`);
      router.push(`/${params.storeId}/orders`);
      router.refresh();
      toast.success("Order deleted successfully");
    } catch (error) {
      toast.error(
        "Make sure to delete all categories and products before deleting the order"
      );
    } finally {
      setLoading(false);
      setOpen(false);
      router.refresh();
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            variant="destructive"
            size={"icon"}
            onClick={() => {
              setOpen(true);
            }}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background image</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    disabled={loading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={(url) => field.onChange("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Order label"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default OrderForm;
