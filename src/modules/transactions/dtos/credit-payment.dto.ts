import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { PaymentMethod } from '../enums/PaymentMethod.enum';

export class CreditPaymentDto {
  @IsNumber()
  @ApiProperty({ description: 'Valor a ser pago', example: 30000 })
  amount: number;

  @IsEnum(PaymentMethod)
  @ApiProperty({ enum: PaymentMethod, example: PaymentMethod.CREDIT })
  payment_method: PaymentMethod;

  @IsString()
  @ApiProperty({
    description: 'Número do cartão de crédito',
    example: '1111222233334444',
  })
  card_number: string;

  @IsString()
  @ApiProperty({
    description: 'Data de expiração do cartão de crédito',
    example: '03/29',
  })
  card_expiration_date: string;

  @IsString()
  @ApiProperty({ description: 'CVV do cartão de crédito', example: '123' })
  card_cvv: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do titular do cartão de crédito',
    example: 'João da Silva',
  })
  card_name: string;

  @IsString()
  @ApiProperty({ description: 'Nome do cliente', example: 'João' })
  client_name: string;

  @IsString()
  @ApiProperty({
    description: 'Email do cliente',
    example: 'joao@cliente.com',
  })
  client_email: string;
}
