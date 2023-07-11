import { IErrorResponse } from '@/common/inferfaces/error-response.interface';
import { ApiProperty } from '@nestjs/swagger';

export class TransactionNotFoundException implements IErrorResponse {
  @ApiProperty({ example: 404 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: '' })
  message: string;

  @ApiProperty({
    example: { transaction: 'Transação não encontrada' },
  })
  error: Record<string, string[]>;
}
