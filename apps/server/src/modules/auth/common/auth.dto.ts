import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const UserLoginSchema = z.object({
  phoneNumber: z.string().min(1).max(12),
  password: z.string(),
});

export class UserLoginReq extends createZodDto(UserLoginSchema) {}

export const RefreshTokenSchema = z.object({
  accessToken: z.string().min(1).base64(),
  refreshToken: z.string().min(1).base64(),
});

export class RefreshTokenReq extends createZodDto(RefreshTokenSchema) {}
