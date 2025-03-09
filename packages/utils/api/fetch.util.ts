// src/api/ApiClient.ts

import {
  ApiClientOptions,
  APPLICATION_JSON,
  DELETE,
  GET,
  POST,
  PUT,
} from "./fetch.type";

interface RequestOptions extends ApiClientOptions {
  retry?: boolean; // 토큰 갱신 후 재시도 여부
}

class ApiClient {
  private apiUrl: string;
  private defaultTimeout: number;
  private defaultRetries: number;

  constructor(
    apiUrl: string = "",
    defaultTimeout: number = 100000,
    defaultRetries: number = 3
  ) {
    this.apiUrl = apiUrl;
    this.defaultTimeout = defaultTimeout;
    this.defaultRetries = defaultRetries;
  }

  public async request<T = any>(options: RequestOptions): Promise<T> {
    const {
      url,
      method = GET,
      headers = {},
      body = null,
      timeout = this.defaultTimeout,
      retries = this.defaultRetries,
      retry = true, // 토큰 갱신 후 재시도 여부
    } = options;

    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => controller.abort(), timeout);

    // 기본 헤더에 인증 토큰 추가
    const authHeaders: HeadersInit = {
      Accept: APPLICATION_JSON,
      ...headers,
    };

    try {
      const response = await fetch(`${url}`, {
        method,
        headers: authHeaders,
        body,
        signal,
        credentials: "include", // ✅ 쿠키 포함
      });

      clearTimeout(timeoutId);

      if (response.status === 401 && retry) {
        return this.request<T>({ ...options, retry: false });
        throw new Error("[ERROR] Unable to refresh access token.");
      }

      if (!response.ok) {
        const errorMessage = `[Error][HTTP] Status code: ${response.status}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }

      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes(APPLICATION_JSON)) {
        return (await response.json()) as T;
      } else {
        return (await response.text()) as unknown as T;
      }
    } catch (error: any) {
      if (error.name === "AbortError") {
        throw new Error("[ERROR] Request timeout");
      }
      throw error;
    }
  }

  // GET 요청 편의 메서드
  public async get<T = any>(url: string, headers?: HeadersInit): Promise<T> {
    return this.request<T>({ url, method: GET, headers });
  }

  // POST 요청 편의 메서드
  public async post<T = any>(
    url: string,
    body: any,
    headers?: HeadersInit
  ): Promise<T> {
    return this.request<T>({
      url,
      method: POST,
      headers: headers ?? { "Content-Type": APPLICATION_JSON },
      body: JSON.stringify(body),
    });
  }
  // PUT 요청 편의 메서드
  public async put<T = any>(
    url: string,
    body: any,
    headers?: HeadersInit
  ): Promise<T> {
    return this.request<T>({
      url,
      method: PUT,
      headers: headers ?? { "Content-Type": APPLICATION_JSON },
      body: JSON.stringify(body),
    });
  }
  // DELETE 요청 편의 메서드
  public async delete<T = any>(url: string, headers?: HeadersInit): Promise<T> {
    return this.request<T>({
      url,
      method: DELETE,
      headers,
    });
  }
}

export default new ApiClient();
