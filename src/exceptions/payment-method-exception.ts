import { IErrorResponse } from '@/common/inferfaces/error-response.interface';
import { ApiProperty } from '@nestjs/swagger';

export class PaymentMethodException implements IErrorResponse {
  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: '' })
  message: string;

  @ApiProperty({
    example: { payment_method: 'Método de pagamento inválido' },
  })
  error: Record<string, string[]>;
}
