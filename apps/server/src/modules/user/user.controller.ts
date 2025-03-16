import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { CreateUserReq } from '@shared/users/users.dto';
import { JwtAuthGuard } from '../auth/guard/jwt.guard';
import { CurrentUser } from '@root/common/decorator/user.decorator';
import { UserType } from 'apps/server/dist/apps/server/src/apps/server/src/modules/user/common/user.dto';
import { Response } from 'express';
import { BEARER } from '@utils/api/fetch.type';

@Controller('api/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async create(@Body() payload: CreateUserReq, @Res() res: Response) {
    const user = await this.userService.create(payload);
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

    return res.status(200).json({ permission: user.role, ok: true });
  }

  @Get('/permission')
  @UseGuards(JwtAuthGuard)
  async checkPermission(@CurrentUser() user: UserType, @Res() res: Response) {
    console.log(user);
    return res.status(200).json({ permission: user.role });
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.userService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
