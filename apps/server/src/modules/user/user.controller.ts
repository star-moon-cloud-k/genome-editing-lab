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

@Controller('api/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async create(@Body() payload: CreateUserReq) {
    const user = await this.userService.create(payload);
    const accessToken = await this.authService.generateAccessToken(
      user.id.toString(),
    );
    const refreshToken = await this.authService.generateRefreshToken(
      user.id.toString(),
    );

    return { user, accessToken, refreshToken };
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
