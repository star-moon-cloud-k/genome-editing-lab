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
import { loginRes } from "../../../../packages/shared/users/users.dto";
import { useUserStore } from "@state/userStore";

export function LoginForm() {
  const [studentId, setStudentId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const { setPermission } = useUserStore();

  const loginHandler = async (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // ✅ 폼 제출 기본 동작 방지
    setError(null);
    setLoading(true);

    try {
      const response = await ApiClient.post(`${API}`, `/api/auth/login`, {
        studentId,
        password,
      });

      if (loginRes.parse(response) && response.permission) {
        await setPermission(response.permission); // ✅ Zustand에 permission 저장
        router.replace("/"); // ✅ 로그인 성공 후 메인 페이지 이동
      } else {
        setError("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      setError("서버 오류로 인해 로그인할 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Zustand에서 permission을 불러오는 중이면 로딩 화면 출력
  if (loading === true) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <Card className="w-11/12 mt-5">
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>아이디와 비밀번호를 입력하세요.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        {/* ✅ Enter 키 입력 시 로그인 요청 실행 */}
        <form
          className="w-full max-w-sm flex flex-col gap-4"
          onSubmit={loginHandler}
        >
          <div className="flex flex-col gap-2">
            <Label>아이디</Label>
            <Input
              className="w-full"
              type="text"
              onChange={(e) => setStudentId(e.target.value)}
              value={studentId}
              disabled={loading}
            />
            <Label>비밀번호</Label>
            <Input
              className="w-full"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              disabled={loading}
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <input type="submit" hidden />
        </form>
      </CardContent>
      <CardFooter className="flex justify-end m-4">
        {loading ? (
          <Button variant="ghost" disabled>
            ⏳ 로그인 중...
          </Button>
        ) : (
          <>
            <Button className="mr-4" variant="ghost" onClick={loginHandler}>
              로그인
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push("/auth/register")}
            >
              회원가입
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
