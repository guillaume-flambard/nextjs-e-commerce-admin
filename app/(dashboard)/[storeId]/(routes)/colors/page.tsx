import prismadb from "@/lib/prismadb";
import BillboardClient from "./components/client/client";
import type { ColorColumn } from "./components/table/columns";
import { format } from "date-fns";
import ColorsClient from "./components/client/client";

const ColorsPage = async ({
  params,
}: {
  params: {
    storeId: string;
  };
}) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorColumn[] = colors.map((color) => ({
    id: color.id,
    name: color.name,
    value: color.value,
    createdAt: format(color.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
