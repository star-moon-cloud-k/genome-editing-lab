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
import type { NextRequest } from "next/server";

export default function StockTable() {
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
          <TableRow onClick={() => router.push("stock/1")}>
            <TableCell className="font-medium">
              <FlaskConicalOff className="stroke-muted" size={"100"} />
            </TableCell>

            <TableCell>
              <div>price</div>
              <div>
                <Badge className="bg-green-600">:)</Badge>
              </div>
            </TableCell>
            <TableCell className="flex-row">
              <Button variant={"ghost"}>5</Button> {/** 이 쪽 라인 */}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
