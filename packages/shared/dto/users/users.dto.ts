import { createZodDto } from "nestjs-zod/dto";
import { UserSchema } from '../../../../apps/server/src/modules/user/common/user.dto';

export class CreateUserReq extends createZodDto(
  UserSchema.pick({
    studentNumber: true,
    password: true,
  })
) {
  passwordCheck!: string;
  labId!: number;
}
