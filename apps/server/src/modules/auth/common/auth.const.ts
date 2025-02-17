export interface TokenPayload {
  userCI?: string;
  sub: string;
  type: TokeType;
  exp?: number;
}

export enum TokeType {
  ACCESS = 'access',
  REFRESH = 'refresh',
}

export const kakaoAuthUrl = 'https://kauth.kakao.com/oauth/authorize';
export const naverAuthUrl = 'https://nid.naver.com/oauth2.0/authorize';
