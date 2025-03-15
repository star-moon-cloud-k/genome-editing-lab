// src/utils/auth.utils.ts

import { API } from "@/env/env.config";

// ✅ 쿠키 기반 토큰 업데이트 (HttpOnly라 localStorage 사용 안 함)
export const updateAccessToken = async (token: string) => {
  await fetch(`${API}/api/auth/set-token`, {
    method: "POST",
    credentials: "include", // ✅ 쿠키 포함
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ accessToken: token }),
  });
};
// ✅ Refresh Token 요청 로직
export const updateRefreshToken = async () => {
  try {
    const response = await fetch(`${API}/api/auth/refresh-token`, {
      method: "POST",
      credentials: "include", // ✅ 쿠키 기반 인증 유지
    });

    if (!response.ok) {
      throw new Error("[ERROR] Refresh token failed");
    }

    const data = await response.json();
    if (data.accessToken) {
      updateAccessToken(data.accessToken); // ✅ 새 Access Token 저장
      return true;
    }

    return false;
  } catch (error) {
    console.error("토큰 갱신 실패:", error);
    logoutUser(); // ✅ Refresh Token도 만료되면 로그아웃
    return false;
  }
};

// ✅ 로그아웃 처리
export const logoutUser = async () => {
  await fetch(`${API}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  window.location.href = "/auth/login"; // ✅ 로그인 페이지로 이동
};
