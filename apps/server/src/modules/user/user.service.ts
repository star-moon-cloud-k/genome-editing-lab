import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma, users } from '@prisma/client';
import { UserRole, UserStatus } from '@root/modules/user/common/user.enum';
import { PrismaService } from '@root/prisma';
import { CreateUserReq } from '@shared/users/users.dto';
import { AuthService } from '../auth/auth.service';
import { forwardRef, Inject } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async create(payload: CreateUserReq) {
    if (payload.password !== payload.passwordCheck) {
      throw new BadRequestException(`password is not verified`);
    }

    const isLabExist = await this.prisma.lab.findUnique({
      where: {
        id: payload.labId,
      },
    });

    if (!isLabExist) {
      throw new BadRequestException(`Lab id is not exist`);
    }

    const isUserExist = await this.prisma.users.findUnique({
      where: {
        student_number_lab: {
          lab: payload.labId,
          student_number: payload.studentNumber,
        },
      },
    });

    if (isUserExist) {
      throw new BadRequestException(`User is already exist`);
    }

    const hashedPassword = await this.authService.getHashedPassword(
      payload.password,
    );

    try {
      return this.prisma.$transaction(async (tx) => {
        const insertData = await tx.users.create({
          data: {
            student_number: payload.studentNumber,
            lab: payload.labId,
            role: UserRole.USER,
            status: UserStatus.ACTIVE,
            password: hashedPassword,
            last_login_at: new Date(),
          },
        });

        return insertData;
      });
    } catch (e) {
      throw new InternalServerErrorException('사용자 생성 중 오류 발생');
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne<T extends Prisma.usersSelect>(
    id: number,
    select?: T,
  ): Promise<
    T extends undefined ? users : Prisma.usersGetPayload<{ select: T }>
  > {
    const user = await this.prisma.users.findFirst({
      where: { id },
      select: select ? select : undefined,
    });

    if (!user) {
      throw new BadRequestException(`id is not exist`);
    }

    return user as T extends undefined
      ? users
      : Prisma.usersGetPayload<{ select: T }>;
  }

  async findOneByStudentNumber(studentNumber: string) {
    const user = await this.prisma.users.findFirst({
      where: { student_number: studentNumber },
    });

    if (!user) {
      throw new BadRequestException('invalid user id');
    }
    return user;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
