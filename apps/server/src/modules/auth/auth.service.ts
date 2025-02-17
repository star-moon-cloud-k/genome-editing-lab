import * as Schema from '@drizzle/schema';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  JsonWebTokenError,
  JwtService,
  NotBeforeError,
  TokenExpiredError,
} from '@nestjs/jwt';
import { REFRESH, SECOND } from '@root/common/const/cache-key.const';
import {
  ENV_JWT_REFRESH_EXPIRATION_TIME,
  ENV_JWT_REFRESH_SECRET_KEY,
  ENV_JWT_SECRET_KEY,
} from '@root/common/const/env-keys.const';
import { TokenPayload, TokeType } from '@root/modules/auth/common/auth.const';
import { UserService } from '@root/modules/user/user.service';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { UserType } from '../user/common/user.dto';
import { DrizzleAsyncProvider } from '@root/drizzle/drizzle.provider';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(
    phoneNumber: string,
    password: string,
  ): Promise<UserType | undefined> {
    const [user] = await this.userService.getValidateUser(
      phoneNumber,
      password,
    );
    if (user) {
      delete user.createdAt;
      delete user.updatedAt;
      delete user.lastLoginAt;
      delete user.registeredAt;
      return user;
    } else {
      throw new UnauthorizedException('invalid password');
    }
  }
  //SECTION - Token 생성
  async generateAccessToken(user: UserType) {
    const payload: TokenPayload = {
      userCI: user.CI,
      sub: user.id,
      type: TokeType.ACCESS,
    };
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>(ENV_JWT_SECRET_KEY),
    });
  }

  async generateRefreshToken(user: UserType) {
    const payload: TokenPayload = {
      sub: user.id,
      type: TokeType.REFRESH,
    };
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>(ENV_JWT_REFRESH_SECRET_KEY),
      expiresIn: process.env.JWT_REFRESH_EXPIRATION_TIME,
    });
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
}
