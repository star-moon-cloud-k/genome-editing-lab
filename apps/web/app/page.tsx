import MainTable from "@/components/stock-table";
import { Button } from "@workspace/ui/components/button";
import { main } from "@config/main.json";
import ShortfallTable from "@/components/shortfall-table";

export default function Page() {
  return (
    <div className="basic_page">
      <div className="basic_contents">
        <h1 className="text-2xl font-bold mt-5">{main.tableName}</h1>
        <ShortfallTable />
      </div>
    </div>
  );
}
