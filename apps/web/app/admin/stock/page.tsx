import AdminTable from "@/components/admin-table";
import { Button } from "@workspace/ui/components/button";

export default function StockPage() {
  return (
    <div className="basic_page">
      <div className="basic_contents">
        <h1 className="text-2xl font-bold mt-5">Hello StockPage</h1>
        <AdminTable />
      </div>
    </div>
  );
}
