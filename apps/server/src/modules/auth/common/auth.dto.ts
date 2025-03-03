import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const UserLoginSchema = z.object({
  studentId: z.string().min(1).max(12),
  password: z.string(),
});

export const UserCreateSchema = z.object({
  studentNumber: z.string().min(9),
  labId: z.number(),
  password: z.string().min(11),
  passwordCheck: z.string().min(11),
});

export class UserLoginReq extends createZodDto(UserLoginSchema) {}

export const RefreshTokenSchema = z.object({
  accessToken: z.string().min(1).base64(),
  refreshToken: z.string().min(1).base64(),
});
export class RefreshTokenReq extends createZodDto(RefreshTokenSchema) {}
