export interface TokenPayload {
  sub: string;
  type: TokeType;
  exp?: number;
}

export enum TokeType {
  ACCESS = 'access',
  REFRESH = 'refresh',
}
