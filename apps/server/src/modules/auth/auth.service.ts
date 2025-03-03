import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  JsonWebTokenError,
  JwtService,
  JwtSignOptions,
  NotBeforeError,
  TokenExpiredError,
} from '@nestjs/jwt';
import { REFRESH } from '@root/common/const/cache-key.const';
import {
  ENV_JWT_EXPIRATION_TIME,
  ENV_JWT_REFRESH_SECRET_KEY,
  ENV_JWT_SECRET_KEY,
} from '@root/common/const/env-keys.const';
import { TokenPayload, TokeType } from '@root/modules/auth/common/auth.const';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { users } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  async validateUser(studentId: string, password: string): Promise<users> {
    const user = await this.userService.findOneByStudentNumber(studentId);
    const isValid = this.checkHashedPassword(password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('invalid password');
    }
    delete user.created_at;
    delete user.updated_at;
    return user;
  }
  //SECTION - Token 생성
  async generateAccessToken(id: string) {
    const payload: TokenPayload = {
      sub: id,
      type: TokeType.ACCESS,
    };
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>(ENV_JWT_SECRET_KEY),
      expiresIn: this.configService.get<string>(ENV_JWT_EXPIRATION_TIME),
    } as JwtSignOptions);
  }

  async generateRefreshToken(id: string) {
    const payload: TokenPayload = {
      sub: id,
      type: TokeType.REFRESH,
    };
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>(ENV_JWT_REFRESH_SECRET_KEY),
      expiresIn: this.configService.get<string>(ENV_JWT_EXPIRATION_TIME),
    } as JwtSignOptions);
  }
  //!SECTION

  async tokenValidateUser(payload: any) {
    return await this.userService.findOne(payload.sub);
  }

  async verifyAccessToken(token: string): Promise<TokenPayload> {
    try {
      return this.jwtService.verify(token, {
        secret: this.configService.get<string>(ENV_JWT_SECRET_KEY),
      });
    } catch (e) {
      if (e instanceof TokenExpiredError) {
        throw new UnauthorizedException('토큰이 만료되었습니다.');
      } else if (e instanceof JsonWebTokenError) {
        throw new UnauthorizedException('잘못된 토큰입니다.');
      } else if (e instanceof NotBeforeError) {
        throw new UnauthorizedException('토큰이 아직 활성화되지 않았습니다.');
      } else {
        throw new UnauthorizedException('토큰 검증 중 오류가 발생했습니다.');
      }
    }
  }

  async decodeAccessToken(token: string): Promise<TokenPayload> {
    try {
      return this.jwtService.verify(token, {
        secret: this.configService.get<string>(ENV_JWT_SECRET_KEY),
      });
    } catch (e) {
      if (e instanceof TokenExpiredError) {
        return this.getTokenPayload(token);
      } else if (e instanceof JsonWebTokenError) {
        throw new UnauthorizedException('잘못된 토큰입니다.');
      } else if (e instanceof NotBeforeError) {
        throw new UnauthorizedException('토큰이 아직 활성화되지 않았습니다.');
      } else {
        throw new UnauthorizedException('토큰 검증 중 오류가 발생했습니다.');
      }
    }
  }

  async verifyRefreshToken(token: string): Promise<TokenPayload> {
    try {
      return this.jwtService.verify(token, {
        secret: this.configService.get<string>(ENV_JWT_REFRESH_SECRET_KEY),
      });
    } catch (e) {
      if (e instanceof TokenExpiredError) {
        throw new UnauthorizedException('refresh token is expired.');
      } else if (e instanceof JsonWebTokenError) {
        throw new UnauthorizedException('invalid token.');
      } else if (e instanceof NotBeforeError) {
        throw new UnauthorizedException('토큰이 아직 활성화되지 않았습니다.');
      } else {
        throw new UnauthorizedException('토큰 검증 중 오류가 발생했습니다.');
      }
    }
  }

  async getTokenPayload(token: string): Promise<TokenPayload> {
    const payload: TokenPayload = this.jwtService.decode(token);
    return payload;
  }
  async getUserTokenKey(sub: string) {
    const key = btoa(sub);
    return REFRESH.concat(key);
  }

  async getHashedPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  async checkHashedPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
