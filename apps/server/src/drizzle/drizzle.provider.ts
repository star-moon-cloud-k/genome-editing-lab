// src/database/database.provider.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import { ConfigService } from '@nestjs/config';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

export const DrizzleAsyncProvider = 'DrizzleAsyncProvider';

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    inject: [ConfigService],
    useFactory: async () => {
      const pool = new Pool({
        host: process.env.DB_HOST, // PostgreSQL 호스트
        port: parseInt(process.env.DB_PORT), // 포트
        database: process.env.DB_NAME, // 데이터베이스 이름
        user: process.env.DB_USER, // 사용자명
        password: process.env.DB_PASSWORD, // 비밀번호
      });

      return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
    },
  },
];
