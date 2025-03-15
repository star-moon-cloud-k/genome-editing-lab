import { createZodDto } from "nestjs-zod/dto";

import z from "zod";

export class CreateUserReq extends createZodDto(
  z.object({
    password: z.string().min(11),
    passwordCheck: z.string().min(11),
    labId: z.number(),
    studentNumber: z.string().min(1).nonempty(),
  })
) {}

export const userPermissionSchema = z.object({
  permission: z.enum(["user", "manager", "admin"]),
});

export const loginRes = userPermissionSchema.merge(
  z.object({
    ok: z.coerce.boolean(),
  })
);

export class UserPermissionRes extends createZodDto(userPermissionSchema) {}
