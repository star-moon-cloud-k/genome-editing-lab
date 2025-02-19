import { Button } from "@workspace/ui/components/button";
import BasicTable from "@/components/user-table";
import { log } from "@config/mock.json";

export default function LogPage() {
  return (
    <div className="basic_page">
      <div className="basic_contents">
        <h1 className="text-2xl font-bold mt-5">Log</h1>
        <BasicTable params={log} />
      </div>
    </div>
  );
}
