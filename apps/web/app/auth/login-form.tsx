"use client";
import * as React from "react";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { useRouter } from "next/navigation";
import ApiClient from "@workspace/utils/api/fetch.util";
import { API } from "@/env/env.config";
import { status } from "../../../../packages/database/generated/client/index";
import { loginRes } from "../../../../packages/shared/users/users.dto";

export function LoginForm() {
  const [studentId, setStudentId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null); // ✅ 오류 메시지 상태 추가

  const router = useRouter();

  const loginHandler = async () => {
    console.log(`${API}/api/auth/login`);
    setError(null); // ✅ 기존 오류 초기화
    try {
      const response = await ApiClient.post(`${API}`, `/api/auth/login`, {
        studentId,
        password,
      });

      if (loginRes.parse(response)) {
        router.refresh(); // ✅ 현재 페이지 리프레시 → 미들웨어 다시 실행됨
      } else {
        setError("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      setError("서버 오류로 인해 로그인할 수 없습니다.");
    }
  };

  return (
    <Card className="w-11/12 mt-5">
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>아이디와 비밀번호를 입력하세요.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center ">
        <form className="w-full max-w-sm flex flex-col gap-4 ">
          <div className="flex flex-col gap-2 ">
            <Label>아이디</Label>
            <Input
              className="w-full"
              type="text"
              onChange={(e) => setStudentId(e.target.value)}
              value={studentId}
            />
            <Label>비밀번호</Label>
            <Input
              className="w-full"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}{" "}
          {/* ✅ 오류 메시지 표시 */}
        </form>
      </CardContent>
      <CardFooter className="flex justify-end m-4">
        <Button className="mr-4" variant="ghost" onClick={() => loginHandler()}>
          로그인
        </Button>
        <Button variant="ghost" onClick={() => router.push("/auth/register")}>
          회원가입
        </Button>
      </CardFooter>
    </Card>
  );
}
