import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ENV_JWT_SECRET_KEY } from '@root/common/const/env-keys.const';
import { DrizzleModule } from '@root/drizzle/drizzle.module';
import { AuthController } from '@root/modules/auth/auth.controller';
import { AuthService } from '@root/modules/auth/auth.service';
import { JwtStrategy } from '@root/modules/auth/strategies/jwt.strategy';
import { UserModule } from '@root/modules/user/user.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule, DrizzleModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>(ENV_JWT_SECRET_KEY),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRATION_TIME'),
        },
      }),
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
