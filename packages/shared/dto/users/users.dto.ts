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
