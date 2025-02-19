import BasicTable from "@/components/user-table";
import { Button } from "@workspace/ui/components/button";
import { user } from "@config/mock.json";

export default function UserPage() {
  return (
    <div className="basic_page">
      <div className="basic_contents">
        <h1 className="text-2xl font-bold mt-5">사용자 관리</h1>
        {user.length > 0 && <BasicTable params={user} />}
      </div>
    </div>
  );
}
