import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AuthService } from '@root/modules/auth/auth.service';
import { TokeType } from '@root/modules/auth/common/auth.const';
import {
  RefreshTokenReq,
  UserLoginReq,
} from '@root/modules/auth/common/auth.dto';
import { UserService } from '@root/modules/user/user.service';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Post('/login')
  async login(@Body() payload: UserLoginReq) {
    const user = await this.authService.validateUser(
      payload.phoneNumber,
      payload.password,
    );
    if (!user) {
      throw new UnauthorizedException('invalid credentials');
    }
    const accessToken = await this.authService.generateAccessToken(
      user.id.toString(),
    );
    const refreshToken = await this.authService.generateRefreshToken(
      user.id.toString(),
    );

    return { accessToken, refreshToken };
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
