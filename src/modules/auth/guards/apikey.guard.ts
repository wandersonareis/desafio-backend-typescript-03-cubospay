import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from './public.guard';

@Injectable()
export class ApiKeyGuard extends AuthGuard('headerapikey') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request: Request = context.switchToHttp().getRequest();
    if (request?.query['api_key'] && !request.header('api_key')) {
      request.headers['api_key'] = request.query['api_key'] as any;
    }
    return super.canActivate(context);
  }

  handleRequest(err: any, account: any, info: any) {
    if (err || info || !account) {
      throw (
        err ||
        new UnauthorizedException(
          'Para acessar este recurso uma api_key deve ser enviada',
        )
      );
    }

    return account;
  }
}
