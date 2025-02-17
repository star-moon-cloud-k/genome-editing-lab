import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '@root/modules/auth/auth.service';
import { UserType } from '@root/modules/user/common/user.dto';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any): Promise<UserType | UnauthorizedException> {
    const user = await this.authService.tokenValidateUser(payload);
    if (!user) {
      throw new UnauthorizedException({ message: 'user does not exist' });
    }
    return user;
  }
}
