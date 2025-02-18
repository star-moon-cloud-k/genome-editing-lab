import StockTable from "@/components/stock-table";
import { Button } from "@workspace/ui/components/button";
import stockData from "@config/stock.json";
export default function Stock() {
  return (
    <div className="flex-1 w-full items-center justify-center min-h-svh ">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold mt-5">{stockData.table.name}</h1>
        <StockTable />
      </div>
    </div>
  );
}
