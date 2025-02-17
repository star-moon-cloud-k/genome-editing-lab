import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from '../post/post.module';
import { DrizzleModule } from '@root/drizzle/drizzle.module';
import { CommonModule } from '../../common/common.module';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PUBLIC_FOLDER_NAME } from '@root/common/const/path.const';
import { ImageMangeModule } from '@root/common/images/image-storage-local.module';
import {
  PUBLIC_FOLDER_PATH,
  TEMP_FOLDER_PATH,
} from '@root/common/const/path.const';
import { CustomLogger } from '@root/utils/logger/logger.service';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as winstonDaily from 'winston-daily-rotate-file';
import * as moment from 'moment-timezone';
import { join } from 'path';
import { NewsModule } from '../news/news.module';
import { ScheduleModule } from '@nestjs/schedule';

const env = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    ServeStaticModule.forRoot(
      {
        rootPath: PUBLIC_FOLDER_PATH, // {root}/images/public
        serveRoot: '/images/public', // 클라이언트가 접근할 URL 경로
      },
      {
        rootPath: TEMP_FOLDER_PATH, // {root}/images/temp
        serveRoot: '/images/temp', // 클라이언트가 접근할 URL 경로
      },
    ),
    WinstonModule.forRoot({
      transports: [
        // 콘솔 출력 옵션 지정
        new winston.transports.Console({
          level: env === 'production' ? 'http' : 'silly',
          format:
            env === 'production'
              ? winston.format.simple() // production 환경에서는 간단한 로그 포맷
              : winston.format.combine(
                  winston.format.colorize({
                    all: true,
                    colors: {
                      info: 'green',
                      warn: 'magenta',
                      error: 'red',
                      debug: 'yellow',
                    },
                  }),
                  winston.format.timestamp(),
                  winston.format.printf(
                    ({ level, message, timestamp }) =>
                      `${timestamp} [${level}]: ${message}`,
                  ),
                ),
        }),

        // 파일 로깅 옵션 지정
        new winstonDaily({
          level: 'http',
          datePattern: 'YYYY-MM-DD',
          dirname: join(__dirname, '..', '..', 'logs'),
          filename: `app.log.%DATE%`,
          maxFiles: '30d',
          zippedArchive: true,
          handleExceptions: true,
          json: false,
        }),
      ],
      format: winston.format.combine(
        winston.format.timestamp({
          format: () => moment().tz('Asia/Seoul').format(),
        }),
        winston.format.json(),
        winston.format.printf((info) => {
          return `${info.timestamp} - ${info.level} [${process.pid}]: ${info.message}`;
        }),
      ),
    }),
    ScheduleModule.forRoot(),
    PostModule,
    DrizzleModule,
    AuthModule,
    UserModule,
    CommonModule,
    ImageMangeModule,
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomLogger],
})
export class AppModule {}
