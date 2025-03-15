import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "logged out" });

  console.log("log ooouut");
  //쿠키 만료 처리 (expires를 과거로)
  response.cookies.set("accessToken", "", { expires: new Date(0) });
  response.cookies.set("refreshToken", "", { expires: new Date(0) });
  return response;
}
