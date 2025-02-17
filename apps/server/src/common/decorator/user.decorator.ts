import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@root/drizzle/schema';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as typeof User;
  },
);
