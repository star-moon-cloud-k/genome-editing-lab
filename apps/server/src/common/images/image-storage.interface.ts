export interface ImageStorage {
  saveTemp(file: Express.Multer.File): Promise<string>; //파일 저장 후 URL 반환
  delete(filePath: string): Promise<void>; //파일 삭제
}
