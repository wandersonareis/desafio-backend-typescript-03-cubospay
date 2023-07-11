import { IErrorResponse } from '@/common/inferfaces/error-response.interface';
import { ApiProperty } from '@nestjs/swagger';

export class InsufficientFundsException implements IErrorResponse {
  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: '' })
  message: string;

  @ApiProperty({
    example: { balance: 'Saldo insuficiente' },
  })
  error: Record<string, string[]>;
}
