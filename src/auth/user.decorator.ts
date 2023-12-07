import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export interface UserData {
  id: number;
  username: string;
}

export const User = createParamDecorator(
  (data: any, ctx: ExecutionContext): UserData => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
