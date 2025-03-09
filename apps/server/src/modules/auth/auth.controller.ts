import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AuthService } from '@root/modules/auth/auth.service';
import { TokeType } from '@root/modules/auth/common/auth.const';
import {
  RefreshTokenReq,
  UserLoginReq,
} from '@root/modules/auth/common/auth.dto';
import { BEARER } from '@utils/api/fetch.type';
import { Response } from 'express';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('/login')
  async login(@Body() payload: UserLoginReq, @Res() res: Response) {
    const user = await this.authService.validateUser(
      payload.studentId,
      payload.password,
    );

    const accessToken = await this.authService.generateAccessToken(
      user.id.toString(),
    );
    const refreshToken = await this.authService.generateRefreshToken(
      user.id.toString(),
    );

    // ✅ 쿠키에 저장 (httpOnly + secure 설정)
    res.cookie('accessToken', accessToken, {
      httpOnly: true, // XSS 공격 방어
      // secure: process.env.NODE_ENV === 'production', // HTTPS 환경에서만 사용
      sameSite: 'strict', // CSRF 방어
      maxAge: 1000 * 60 * 60, // 1시간 유효
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일 유효
    });

    res.setHeader('Authorization', `${BEARER}${accessToken}`);
    console.log('what');
    return res.status(200).json({ permission: user.role, ok: true });
  }

  @Post('/refresh-token')
  async generateToken(@Body() payload: RefreshTokenReq) {
    const token = atob(payload.accessToken);
    const decodedAccessToken = await this.authService.decodeAccessToken(token);
    const now = Math.floor(Date.now() / 1000);

    if (
      decodedAccessToken.type === TokeType.ACCESS &&
      decodedAccessToken.exp < now
    ) {
      const decodedRefreshToken =
        await this.authService.decodeAccessToken(token);

      if (
        decodedRefreshToken.type === TokeType.REFRESH &&
        decodedRefreshToken.exp > now
      ) {
        await this.authService.verifyRefreshToken(payload.refreshToken);
        const accessToken = await this.authService.generateAccessToken(
          decodedAccessToken.sub,
        );
        const refreshToken = await this.authService.generateRefreshToken(
          decodedAccessToken.sub,
        );
        return { accessToken, refreshToken };
      }
    } else {
      throw new BadRequestException('invalid token');
    }
  }
}
