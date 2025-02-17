import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ResponseMessage } from '@root/common/const/response.enum';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const messsage =
      exception instanceof HttpException
        ? exception.getResponse()
        : ResponseMessage.INTERNAL_SERVER_ERROR;
    response.status(status).json({
      status: 'fail',
      message: messsage,
      statusCode: status,
    });
  }
}
