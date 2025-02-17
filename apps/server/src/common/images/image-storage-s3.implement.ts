// import { Injectable } from '@nestjs/common';

// import * as fs from 'fs/promises';
// import { v4 as uuid } from 'uuid';
// import { extname, join } from 'path';
// import { TEMP_FOLDER_NAME } from '../const/path.const';
// import { ImageStorage } from './image-storage.interface';

// @Injectable()
// export class LocalStorageService implements ImageStorage {
//   private readonly s3 = new S3({
//     region: process.env.AWS_REGION,
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   });
//   private readonly bucketName = process.env.S3_BUCKET_NAME;

//   async save(file: Express.Multer.File): Promise<string> {
//     const params = {
//       Bucket: this.bucketName,
//       Key: `${Date.now()}-${file.originalname}`,
//       Body: file.buffer,
//       ContentType: file.mimetype,
//     };

//     const result = await this.s3.upload(params).promise();
//     return result.Location; // S3에 업로드된 URL 반환
//   }

//   async delete(filePath: string): Promise<void> {
//     const fileName = filePath.split('/').pop();

//     await this.s3
//       .deleteObject({ Bucket: this.bucketName, Key: fileName })
//       .promise();
//   }
// }
