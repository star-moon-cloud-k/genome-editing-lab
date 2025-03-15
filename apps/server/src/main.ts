import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/main/app.module';
import * as dotenv from 'dotenv';

import { ZodValidationPipe } from 'nestjs-zod';
import { LogInterceptor } from './common/interceptor/log.interceptor';
import { CustomLogger } from './utils/logger/logger.service';
import cookieParser from 'cookie-parser'; // ✅ 여기서 변경

async function bootstrap() {
  dotenv.config(); // Load environment variables
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  const logger = app.get(CustomLogger);
  app.enableCors({
    origin: 'http://star-moon-cloud-k.iptime.org:3005', // 허용할 도메인 (모든 도메인 허용)
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization, Cookie',
    credentials: true, // 쿠키 등 인증 정보 포함 여부
  });
  app.useLogger(logger); // 전역 ZodValidationPipe 설정
  app.useGlobalPipes(new ZodValidationPipe());
  app.useGlobalInterceptors(new LogInterceptor());
  await app.listen(process.env.PORT);
  console.info(`LabServer start on ${process.env.PORT}`);
}
bootstrap();
