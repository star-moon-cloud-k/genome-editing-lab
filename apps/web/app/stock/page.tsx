import StockTable from "@/components/stock-table";
import { Button } from "@workspace/ui/components/button";
import stockData from "@config/stock.json";
export default function Stock() {
  return (
    <div className="basic_page">
      <div className="basic_contents">
        <h1 className="text-2xl font-bold mt-5">{stockData.table.name}</h1>
        <StockTable />
      </div>
    </div>
  );
}
