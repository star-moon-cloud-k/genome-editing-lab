"use client";
import { main } from "@config/layout.json";
import { Badge } from "@workspace/ui/components/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { useUserStore } from "@state/userStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { permission } = useUserStore();
  const router = useRouter();

  // ✅ 로그인 정보가 확인되지 않으면 로그인 페이지로 이동
  useEffect(() => {
    if (permission === undefined) return; // ✅ Zustand 초기화 대기
    if (!permission) router.push("/auth/login"); // ✅ 로그인 안 된 경우 로그인 페이지로 이동
  }, [permission, router]);

  // ✅ Zustand에서 permission을 불러오는 중이면 로딩 화면 출력
  if (permission === undefined) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="basic_page">
      <div className="basic_contents">
        <h1 className="text-2xl font-bold mt-5">{main.tableName}</h1>
        <div className="m-5 relative w-100">
          <Table className="table-fixed">
            <TableHeader>
              <TableRow>
                <TableHead className="">Name</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div>sdsd</div>
                  <div></div>
                </TableCell>
                <TableCell className="flex-row">
                  <div className="mr-5">5</div>
                  <Badge className="bg-red-600">Bad</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div>price</div>
                  <div></div>
                </TableCell>
                <TableCell className="flex-row">
                  <div className="mr-5">5</div>
                  <Badge className="bg-slate-600">Normal</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
