import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@drizzle/schema';
import {
  POST_IMAGE_PATH,
  TEMP_FOLDER_PATH,
} from '@root/common/const/path.const';
import { promises } from 'fs';
import { basename, join } from 'path';
import { CreateImageDto } from '@root/common/dto/image.dto';
import { DrizzleAsyncProvider } from '@root/drizzle/drizzle.provider';
@Injectable()
export class CommonService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>,
  ) {}

  async createImage(dto: CreateImageDto) {
    const tempFilePath = join(TEMP_FOLDER_PATH, dto.path);

    //파일 이름만 가져오기
    // /User/aaa/bbb/ccc/asdf.jpg -> asdf.jpg
    const fileName = basename(tempFilePath);

    //새로 이동할 포스트 폴더의 경로 + 이미지 이름
    // {project 경로}/public/posts/asdf.jpg
    const newPath = join(POST_IMAGE_PATH, fileName);

    try {
      //파일이 존재하는지 확인
      //만약 존재하지 않는다면, 에러를 던짐
      await promises.access(tempFilePath);
      const [image] = await this.db.transaction(async (tx) => {
        return await tx
          .insert(schema.Images)
          .values({ ...dto, url: fileName })
          .returning();
      });

      await promises.rename(tempFilePath, newPath);
      return image;
    } catch (e) {
      throw new BadRequestException('존재하지 않는 파일입니다.', e);
    }
  }
}
