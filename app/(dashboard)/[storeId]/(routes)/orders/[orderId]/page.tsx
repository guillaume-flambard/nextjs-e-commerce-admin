import prismadb from "@/lib/prismadb";
import OrderForm from "../components/form/order-form";

const OrderPage = async ({
  params,
}: {
  params: {
    orderId: string;
  };
}) => {
  const order = await prismadb.order.findUnique({
    where: {
      id: params.orderId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <OrderForm initialData={order} />
      </div>
    </div>
  );
};

export default OrderPage;
