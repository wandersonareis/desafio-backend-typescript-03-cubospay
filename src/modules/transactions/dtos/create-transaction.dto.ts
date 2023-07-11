import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { PaymentMethod } from '../enums/PaymentMethod.enum';

export class CreateTransactionDto {
  @IsNotEmpty({ message: 'Amount é obrigatário' })
  @IsInt({ message: 'Amount deve ser um número inteiro' })
  @ApiProperty()
  amount: number;

  @IsNotEmpty({ message: 'payment_method é obrigatário' })
  @IsEnum(PaymentMethod, {
    message: 'Método de pagamento inválido',
  })
  @ApiProperty({ enum: PaymentMethod, enumName: 'PaymentMethod' })
  payment_method: PaymentMethod;

  @IsOptional()
  @IsString({ message: 'card_number deve ser uma string' })
  @ApiPropertyOptional()
  card_number?: string;

  @IsOptional()
  @IsString({ message: 'card_expiration_date deve ser uma string' })
  @Matches(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: 'A data de validade deve estar no formato MM/yy.',
  })
  @ApiPropertyOptional()
  card_expiration_date?: string;

  @IsOptional()
  @Length(3, 3, { message: 'card_cvv deve ter 3 caracteres' })
  @IsNumberString(
    { no_symbols: true },
    { message: 'card_cvv deve conter apenas números.' },
  )
  @ApiPropertyOptional()
  card_cvv?: string;

  @IsOptional()
  @IsString({ message: 'card_name deve ser uma string' })
  @ApiPropertyOptional()
  card_name?: string;

  @IsOptional()
  @IsString({ message: 'client_name deve ser uma string' })
  @ApiPropertyOptional()
  client_name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'client_email deve ser um email' })
  @ApiPropertyOptional()
  client_email?: string;
}
