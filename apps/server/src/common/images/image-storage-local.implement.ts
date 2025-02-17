// src/modules/main/services/local-storage.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs/promises';
import { v4 as uuid } from 'uuid';
import { extname, join } from 'path';
import {
  PUBLIC_FOLDER_PATH,
  TEMP_FOLDER_PATH,
  PROJECT_ROOT_PATH,
} from '../const/path.const';
import { ImageStorage } from './image-storage.interface';
import { CustomLogger } from '@root/utils/logger/logger.service';

@Injectable()
export class LocalStorageService implements ImageStorage {
  constructor(private readonly logger: CustomLogger) {}

  // temp 폴더에 이미지 저장
  async saveTemp(file: Express.Multer.File): Promise<any> {
    const fileName = `${uuid()}${extname(file.originalname)}`;
    const fullPath = join(TEMP_FOLDER_PATH, fileName);
    try {
      await fs.writeFile(fullPath, file.buffer); // 파일 저장
      this.logger.log(`임시 파일이 성공적으로 저장되었습니다: ${fileName}`); // 'log' 사용
    } catch (e) {
      this.logger.error(`임시 파일 저장 실패: ${e.message}`, e.stack);
      throw new InternalServerErrorException('임시 파일 저장에 실패했습니다.');
    }

    return { url: `images/temp/${fileName}` };
  }

  // 파일 삭제 (필요에 따라)
  async delete(filePath: string): Promise<void> {
    try {
      await fs.unlink(join(PROJECT_ROOT_PATH, filePath));
      this.logger.log(`파일이 성공적으로 삭제되었습니다: ${filePath}`); // 'log' 사용
    } catch (err) {
      this.logger.warn(`파일 삭제 실패: ${filePath} - ${err.message}`);
      // 필요에 따라 예외를 던질 수 있습니다.
      // throw new InternalServerErrorException('파일 삭제에 실패했습니다.');
    }
  }
}
