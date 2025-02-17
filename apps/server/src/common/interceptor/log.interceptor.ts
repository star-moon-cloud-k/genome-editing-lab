import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP CALL');
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    /**
     * 요청이 들어올 때 REQ 요청이 들어온 타임스탬프를 찍는다.
     * [REQ] {요청 PATH} {요청 시간}
     *
     * 요청이 끝날 때 (응답이 나갈 때) 다시 타임스탬프를 찍는다.
     * [RES] {요청 PATH} {응답식시간} {얼마나 걸렸는지 ms}
     */

    const now = Date.now();

    const req = context.switchToHttp().getRequest();

    // /posts
    // /common/image
    const path = req.originalUrl;

    //* [REQ] {요청 PATH} {요청 시간}
    // console.log(`[REQ] ${path} ${now.toLocaleString('kr')}`);

    //handle() 을 넣게 되면 응답 값을 받을 수 있다.
    //위 까지는 요청이 들어올 때 실행
    //return next.handle() 을 실행되는 순간
    //observable()로 라우트 로직이 전부 실행되고 응답이 반환된다.
    //
    return next.handle().pipe(
      //우리가 원하는 rxJS 에서 실행할 수 있는 모든 기능을 실행할 수 있다.
      tap(() => this.logger.log(`${req.method} ${path} ${Date.now() - now}ms`)),
      //map()은 tap과 다르게 값을 변경할 수 있다.
      //   map((oberservable) => {
      //     return {
      //       message: '응답',
      //       response: oberservable,
      //     };
      //   }),
      // 응답 값을 사용하여 tap() 에서 데이터를 사용할 수 있다.
      //변형은 불가능 해도, 볼수는 있다.
    );
  }
}
