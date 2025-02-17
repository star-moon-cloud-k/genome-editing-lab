import { Module } from '@nestjs/common';
import { DrizzleModule } from '@root/drizzle/drizzle.module';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';
import { ImageMangeModule } from './images/image-storage-local.module';

@Module({
  imports: [ImageMangeModule, DrizzleModule],
  controllers: [CommonController],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
