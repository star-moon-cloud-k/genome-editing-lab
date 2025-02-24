import BasicTable from "@/components/user-table";
import { Button } from "@workspace/ui/components/button";
import { log } from "@config/mock.json";
import { StockCard } from "@/components/stock-card";
import { Label } from "@workspace/ui/components/label";
export default function detailPage({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <div className="basic_page">
      <div className="basic_contents">
        <StockCard />
        <BasicTable params={log} route="admin/stock" />
      </div>
    </div>
  );
}
