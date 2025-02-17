// common/const/path.const.ts
import { join } from 'path';

// 서버 프로젝트의 루트 폴더
export const PROJECT_ROOT_PATH = process.cwd();

// 외부에서 접근 가능한 파일들을 모아둔 폴더 이름
export const ROOT_IMAGE_FOLDER_NAME = 'images';

// 포스트 이미지들을 저장할 폴더 이름
export const PUBLIC_FOLDER_NAME = 'public';

// 임시 폴더 이름
export const TEMP_FOLDER_NAME = 'temp';

// 실제 공개 폴더의 절대경로
// /{프로젝트의 위치}/images/public
export const PUBLIC_FOLDER_PATH = join(
  PROJECT_ROOT_PATH,
  ROOT_IMAGE_FOLDER_NAME,
  PUBLIC_FOLDER_NAME,
);

// 임시 파일들을 저장할 폴더의 절대경로
// /{프로젝트의 위치}/images/temp
export const TEMP_FOLDER_PATH = join(
  PROJECT_ROOT_PATH,
  ROOT_IMAGE_FOLDER_NAME,
  TEMP_FOLDER_NAME,
);

// 포스트 이미지들을 저장할 폴더의 절대경로
// /{프로젝트의 위치}/images/public/posts
export const POST_IMAGE_PATH = join(PUBLIC_FOLDER_PATH, 'posts');

// 클라이언트에서 접근할 때 사용할 공개 이미지 경로
// /images/public/posts/xx.jpg
export const POST_PUBLIC_IMAGE_PATH = join('images', 'public', 'posts');
