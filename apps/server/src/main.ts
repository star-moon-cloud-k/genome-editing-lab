import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/main/app.module';
import * as dotenv from 'dotenv';

import { ZodValidationPipe } from 'nestjs-zod';
import { LogInterceptor } from './common/interceptor/log.interceptor';
import { CustomLogger } from './utils/logger/logger.service';

async function bootstrap() {
  dotenv.config(); // Load environment variables
  const app = await NestFactory.create(AppModule);

  const logger = app.get(CustomLogger);
  app.enableCors({
    origin: '*', // 허용할 도메인 (모든 도메인 허용)
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // 쿠키 등 인증 정보 포함 여부
  });
  app.useLogger(logger); // 전역 ZodValidationPipe 설정
  app.useGlobalPipes(new ZodValidationPipe());
  app.useGlobalInterceptors(new LogInterceptor());
  await app.listen(process.env.PORT);
  console.info(`mosaic start on ${process.env.PORT}`);
}
bootstrap();
