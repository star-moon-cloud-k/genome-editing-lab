import { ResponseMessage } from '@common/const/response.enum';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, map } from 'rxjs';

//NOTE - 응답 성공 interceptor
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    // 'skipInterceptor' 메타데이터가 있는지 확인
    const skipInterceptor = this.reflector.get<boolean>(
      'skipInterceptor',
      context.getHandler(),
    );

    if (skipInterceptor) {
      // 메타데이터가 설정된 경우 인터셉터를 생략
      return next.handle();
    }

    // HTTP 응답 객체 가져오기
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    // 현재 응답의 상태 코드 가져오기
    const statusCode = response.statusCode;
    return next.handle().pipe(
      map((data) => ({
        message: ResponseMessage.SUCCESS,
        data: data,
        statusCode: statusCode,
      })),
    );
  }
}
