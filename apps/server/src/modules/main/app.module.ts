import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import {
  PUBLIC_FOLDER_PATH,
  TEMP_FOLDER_PATH,
} from '@root/common/const/path.const';
import { ImageMangeModule } from '@root/common/images/image-storage-local.module';
import { CustomLogger } from '@root/utils/logger/logger.service';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { CommonModule } from '../../common/common.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { join } from 'path';
import { PrismaService } from '@root/prisma';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

const env = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    ServeStaticModule.forRoot(
      {
        rootPath: PUBLIC_FOLDER_PATH,
        serveRoot: '/images/public',
      },
      {
        rootPath: TEMP_FOLDER_PATH,
        serveRoot: '/images/temp',
      },
    ),
    WinstonModule.forRoot({
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(), // ✅ `format` 제거 (전체 설정을 따라감)
        new DailyRotateFile({
          dirname: join(__dirname, '..', '..', 'logs'),
          filename: 'app-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          maxFiles: '30d',
          zippedArchive: true,
        }),
      ],
    }),
    ScheduleModule.forRoot(),
    CommonModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomLogger, PrismaService],
})
export class AppModule {}
