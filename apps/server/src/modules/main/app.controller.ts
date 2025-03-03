import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { users } from '@prisma/client';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  getHello(): string {
    return this.appService.getHello();
  }
}
