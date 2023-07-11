import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

export class ValidationException extends HttpException {
  constructor(
    public validationErrors: Record<string, any>,
    statusCode: number = HttpStatus.BAD_REQUEST,
  ) {
    super(validationErrors, statusCode);
  }
}

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(exception.getStatus()).json({
      statusCode: exception.getStatus(),
      success: false,
      message: '',
      error: exception.validationErrors,
    });
  }
}
