// apps/web/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 1. 보호된 경로 설정
const protectedRoutes = ["/admin", "/admin/user", "/admin/stock"];

// 2. Middleware 정의
export function middleware(request: NextRequest) {
  // 3. 쿠키에서 토큰 가져오기
  const accessToken = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

  // (auth) 경로: login, signup 등은 토큰이 없어도 접근 가능
  // 정규식 사용: /login, /signup, /public 등
  const isAuthPath =
    pathname.startsWith("/login") || pathname.startsWith("/auth");

  // 4. 보호된 경로 접근 시 토큰 확인
  // 토큰이 없고, 인증이 필요한 페이지로 접근 중이면 => 로그인 페이지로 리다이렉트
  if (!accessToken && !isAuthPath) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  // 토큰이 있고, 로그인/회원가입 페이지로 가려고 하면 => / (홈 등)로 리다이렉트
  if (accessToken && isAuthPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 6. 토큰이 있거나 보호된 경로가 아닌 경우 다음 요청 진행
  return NextResponse.next();
}

// 7. Middleware 적용할 경로 설정
export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};
