import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
declare const ApiKeyGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class ApiKeyGuard extends ApiKeyGuard_base {
    private reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest(err: any, account: any, info: any): any;
}
export {};
