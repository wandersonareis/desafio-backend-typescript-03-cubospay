import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class ValidationException extends HttpException {
    validationErrors: Record<string, any>;
    constructor(validationErrors: Record<string, any>, statusCode?: number);
}
export declare class ValidationFilter implements ExceptionFilter {
    catch(exception: ValidationException, host: ArgumentsHost): void;
}
