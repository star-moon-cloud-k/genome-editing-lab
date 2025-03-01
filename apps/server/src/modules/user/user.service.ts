import * as schema from '@drizzle/schema';
import { User } from '@drizzle/schema';
import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DrizzleAsyncProvider } from '@root/drizzle/drizzle.provider';
import { UserRole, UserStatus } from '@root/modules/user/common/user.enum';
import { CreateUserReq } from '@shared/dto/users/users.dto';
import { createHash } from 'crypto';
import { eq, getTableColumns, and } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { InsertUserDto } from './common/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>,
  ) {}

  async create(payload: CreateUserReq) {
    if (payload.password !== payload.passwordCheck) {
      throw new BadRequestException(`password is not verified`);
    }
    const [userExist] = await this.db
      .select()
      .from(User)
      .where(
        and(
          eq(User.lab, payload.labId),
          eq(User.studentNumber, payload.studentId),
        ),
      );

    if (userExist) {
      throw new BadRequestException(`User is already exist`);
    }

    const user = new InsertUserDto();

    user.studentNumber = payload.studentId;
    user.lab = payload.labId;
    user.role = UserRole.USER;
    user.status = UserStatus.ACTIVE;
    user.lastLoginAt = new Date();

    return await this.db.transaction(async (tx) => {
      const [insertData] = await tx.insert(User).values(user).returning();
      if (!insertData) {
        tx.rollback();
        throw new InternalServerErrorException('Server occured error');
      }
      return insertData;
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    const [user] = await this.db
      .select({
        id: User.id,
        role: User.role,
      })
      .from(User)
      .where(eq(User.id, id));
    if (!user) {
      throw new BadRequestException(`id is not exist`);
    }

    return user;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async getValidateUser(studentNumber: string, password: string) {
    return await this.db
      .select(getTableColumns(User))
      .from(User)
      .where(
        and(eq(User.studentNumber, studentNumber), eq(User.password, password)),
      );
  }
}
