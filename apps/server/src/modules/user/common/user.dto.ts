import * as schema from '@drizzle/schema';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

// 필드 타입을 명시적으로 정의
export const UserSchema = z.object({
  id: z.number(),
  studentNumber: z.string().optional(),
  password: z.string().optional(),
  role: z.enum(['user', 'manager', 'admin']).optional(),
  status: z.enum(['active', 'disabled']).optional(),
  lab: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  lastLoginAt: z.date().optional(),
});

export const UserSelectSchema = createSelectSchema(schema.User);
export const InsertUserDto = createZodDto(createInsertSchema(schema.User));

export type UserType = z.infer<typeof UserSchema>;
