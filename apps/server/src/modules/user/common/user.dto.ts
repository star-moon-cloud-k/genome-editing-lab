import { UserRole, UserStatus } from '@root/modules/user/common/user.enum';
import { createZodDto } from 'nestjs-zod';
import { z, ZodLazy } from 'zod';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import * as schema from '@drizzle/schema';

const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);

export const UserSchema = z.object({
  id: z.string().uuid(),
  CI: z.string().max(200),
  nickname: z.string(),
  role: z.enum(['user', 'admin']),
  status: z.enum(['active', 'disabled']),
  lastLoginAt: z.date(),
  registeredAt: z.date(),
});

export class InsertUserDto extends createZodDto(
  UserSchema.pick({
    id: true,
    CI: true,
    nickname: true,
    role: true,
    status: true,
    lastLoginAt: true,
    registeredAt: true,
  }),
) {}

export type UserType = z.infer<typeof UserSchema>;

export class CreateUserReq extends createZodDto(
  z.object({
    phoneNumber: z.string().trim().max(12).nonempty(),
    password: z.string().nonempty(),
  }),
) {}

export const createUserRes = UserSchema.pick({
  id: true,
  nickname: true,
});
