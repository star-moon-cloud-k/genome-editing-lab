import {
  Controller,
  Delete,
  Inject,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CommonService } from './common.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageManageService } from './images/image-storage.service';

@Controller('api/common')
export class CommonController {
  constructor(
    private readonly commonService: CommonService,
    private readonly imageManagerSerive: ImageManageService,
  ) {}

  @Post('image')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const url = await this.imageManagerSerive.uploadFile(file);
    return url;
  }

  @Delete('image')
  @UseInterceptors(FileInterceptor('image'))
  async deleteFile(@UploadedFile() file: string) {
    await this.imageManagerSerive.deleteFile(file);
    return;
  }
}
