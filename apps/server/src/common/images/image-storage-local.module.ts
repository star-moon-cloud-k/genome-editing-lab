import { Module } from '@nestjs/common';
import { LocalStorageService } from './image-storage-local.implement';
import { ImageManageService } from './image-storage.service';
import { CustomLogger } from '@root/utils/logger/logger.service';

@Module({
  providers: [
    ImageManageService,
    {
      provide: 'ImageStorage',
      useClass:
        process.env.STORAGE_TYPE === 's3'
          ? LocalStorageService
          : LocalStorageService,
    },
    LocalStorageService, // 필요 시 명시적으로 추가
    CustomLogger,
  ],
  exports: ['ImageStorage', ImageManageService],
})
export class ImageMangeModule {}
