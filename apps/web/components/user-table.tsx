"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { useRouter } from "next/navigation";

interface Identifiable {
  id: string | number;
}

export default function BasicTable<T extends Identifiable>({
  params,
  route,
}: {
  params: T[];
  route: string;
}) {
  const router = useRouter();

  // ✅ 첫 번째 객체의 키를 가져와 테이블 헤더로 사용
  const tableHeaders = params.length > 0 ? Object.keys(params[0] ?? {}) : [];

  return (
    <div className="m-5 relative w-100">
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            {tableHeaders.map((headerName) => (
              <TableHead key={headerName}>{headerName}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {params.map((cellData) => (
            <TableRow
              key={cellData.id} // ✅ key 추가
              onClick={() =>
                route ? router.push(`${route}/${cellData.id}`) : null
              }
            >
              {tableHeaders.map((key) => (
                <TableCell key={key}>
                  <div>{String(cellData[key as keyof T] ?? "")}</div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
