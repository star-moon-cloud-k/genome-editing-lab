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

export default function ShortfallTable() {
  return (
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
              <text className="mr-5">5</text>
              <Badge className="bg-red-600">:(</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div>price</div>
              <div></div>
            </TableCell>
            <TableCell className="flex-row">
              <text className="mr-5">5</text>
              <Badge className="bg-slate-600">:0</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
