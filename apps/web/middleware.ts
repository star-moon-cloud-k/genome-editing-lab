import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ✅ 보호된 경로 설정
const protectedRoutes = ["/admin", "/admin/user", "/admin/stock"];

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  console.log(`middleware : ${accessToken}`);
  const { pathname } = request.nextUrl;

  // ✅ `auth` 관련 경로 (로그인, 회원가입 등)
  const isAuthPath = pathname.startsWith("/auth"); // 정확한 URL 체크

  // ✅ 🔥 보호된 경로 접근 시 토큰 확인
  if (!accessToken && isAuthPath) {
    console.warn(`🔒 보호된 경로 접근 (${pathname}) - 로그인 페이지로 이동`);
    return NextResponse.next();
    // return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // ✅ 🔥 로그인 페이지에서 `accessToken`이 있으면 홈으로 리디렉트
  if (!accessToken && !isAuthPath) {
    console.info("✅ 로그인 상태 - 대시보드로 이동");
    return NextResponse.redirect(new URL("/auth", request.url));
    // return NextResponse.redirect(new URL("/", request.url));
  }
  // ✅ 🔥 로그인 페이지에서 `accessToken`이 있으면 홈으로 리디렉트
  if (accessToken && isAuthPath) {
    console.info("✅ 로그인 상태 - 대시보드로 이동");
    // return NextResponse.redirect(new URL("/auth", request.url));
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// ✅ Middleware 적용할 경로 설정
export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};
