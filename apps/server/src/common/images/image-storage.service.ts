import { Injectable, Inject } from '@nestjs/common';
import type { ImageStorage } from './image-storage.interface';

@Injectable()
export class ImageManageService {
  constructor(
    @Inject('ImageStorage') private readonly imageStorage: ImageStorage, //Implement DI
  ) {}

  async uploadFile(file: Express.Multer.File): Promise<string> {
    return this.imageStorage.saveTemp(file);
  }

  async deleteFile(filePath: string): Promise<void> {
    return this.imageStorage.delete(filePath);
  }
}
