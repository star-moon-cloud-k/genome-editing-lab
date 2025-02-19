"use client";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { FlaskConicalOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminTable() {
  const router = useRouter();
  return (
    <div className="m-5 relative w-100">
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="">image</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            onClick={() => {
              router.push("/admin/stock/12");
            }}
          >
            <TableCell className="font-medium">
              <FlaskConicalOff className="stroke-muted" size={"100"} />
            </TableCell>
            <TableCell>
              <div>price</div>
              <Badge className="bg-green-600">:)</Badge>
            </TableCell>
            <TableCell className="flex-row">
              <div>5</div> {/** 이 쪽 라인 */}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
