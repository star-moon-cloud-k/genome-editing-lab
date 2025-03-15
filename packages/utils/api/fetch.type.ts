// 상수 기본값 정의
export const DEFAULT_FETCH_TIMEOUT = 10000; // 10초
export const DEFAULT_FETCH_RETRIES = 3; // 재시도 횟수
export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";
export const PATCH = "PATCH";
export const APPLICATION_JSON = "application/json";
export const APPLICATION_XML = "application/xml";
export const BEARER = "Bearer ";

export type ApiClientOptions = {
  url: string;
  path: string;
  method?: typeof GET | typeof POST | typeof PUT | typeof DELETE | typeof PATCH;
  headers?: HeadersInit;
  body?: BodyInit | null;
  timeout?: number; // 타임아웃 (밀리초)
  retries?: number; // 재시도 횟수
};
