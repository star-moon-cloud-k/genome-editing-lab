import { Module } from '@nestjs/common';
import { drizzleProvider, DrizzleAsyncProvider } from './drizzle.provider';

export const PG_CONNECTION = 'PG_CONNECTION'; // ignore that it is not separate file

@Module({
  providers: [...drizzleProvider], // Drizzle Provider 등록
  exports: [DrizzleAsyncProvider], // 다른 모듈에서 사용 가능하도록 Export
})
export class DrizzleModule {}
