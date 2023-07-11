import { Account } from '@/modules/accounts/entities/account.entity';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AccountFromApi = createParamDecorator(
  (_, ctx: ExecutionContext): Account => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as Account;
  },
);
