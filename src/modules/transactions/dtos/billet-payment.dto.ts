import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { PaymentMethod } from '../enums/PaymentMethod.enum';

export class BilletPaymentDto {
  @IsNumber()
  @ApiProperty({ description: 'Valor do pagamento', example: 30000 })
  amount: number;

  @IsEnum(PaymentMethod)
  @ApiProperty({ enum: PaymentMethod, example: PaymentMethod.BILLET })
  payment_method: PaymentMethod;

  @IsString()
  @ApiProperty({ description: 'Nome do cliente', example: 'João da Silva' })
  client_name: string;

  @IsString()
  @ApiProperty({ description: 'Email do cliente', example: 'joao@cliente.com' })
  client_email: string;
}
