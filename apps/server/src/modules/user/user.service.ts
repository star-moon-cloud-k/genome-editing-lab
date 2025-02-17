import * as schema from '@drizzle/schema';
import { User } from '@drizzle/schema';
import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DrizzleAsyncProvider } from '@root/drizzle/drizzle.provider';
import {
  CreateUserReq,
  InsertUserDto,
} from '@root/modules/user/common/user.dto';
import { UserRole, UserStatus } from '@root/modules/user/common/user.enum';
import { createHash } from 'crypto';
import { eq, getTableColumns, or } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class UserService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>,
  ) {}

  generateCI(phoneNumber: string, password: string): string {
    const hash = createHash('sha256');
    hash.update(phoneNumber + password);
    return hash.digest('hex');
  }
  async create(payload: CreateUserReq) {
    const CI = this.generateCI(payload.phoneNumber, payload.password);
    const [userExiest] = await this.db
      .select()
      .from(User)
      .where(or(eq(User.CI, CI)));

    if (userExiest) {
      throw new BadRequestException(`Phone Number is already exist`);
    }

    const user = new InsertUserDto();

    user.CI = CI;
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

  async findOne(id: string) {
    const [user] = await this.db
      .select({
        id: User.id,
        nickname: User.nickname,
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

  async getValidateUser(phoneNumber: string, password: string) {
    const CI = this.generateCI(phoneNumber, password);
    return await this.db
      .select(getTableColumns(User))
      .from(User)
      .where(eq(User.CI, CI));
  }
}
