import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { users } from '@prisma/client';
import { AuthService } from '@root/modules/auth/auth.service';
import { UserSelectType } from '@root/modules/user/common/user.dto';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        // ✅ 쿠키에서도 JWT 추출 가능 (httpOnly 쿠키 지원)
        (req) => req?.cookies?.accessToken,
        // ✅ 헤더에서 토큰 추출 (기본 방식)
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),

      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(
    payload: any,
  ): Promise<UserSelectType | UnauthorizedException> {
    const user = await this.authService.tokenValidateUser(payload);
    if (!user) {
      throw new UnauthorizedException({ message: 'user does not exist' });
    }
    return user;
  }
}
