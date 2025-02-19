import BasicTable from "@/components/user-table";
import { Button } from "@workspace/ui/components/button";
import { log } from "@config/mock.json";
import { UserCard } from "@/components/user-card";
export default function detailPage({ params }: { params: { id: string } }) {
  return (
    <div className="basic_page">
      <div className="basic_contents">
        <UserCard />
        <BasicTable params={log} route={""} />
      </div>
    </div>
  );
}
