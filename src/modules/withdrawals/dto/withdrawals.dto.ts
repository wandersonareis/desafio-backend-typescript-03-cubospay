import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class WithdrawalDto {
  @IsNotEmpty({ message: 'O valor deve ser informado' })
  @IsInt({ message: 'O valor de balance deve ser um número inteiro' })
  @ApiProperty({
    description: 'Valor a ser sacado em centavos',
    example: 100,
  })
  balance: number;
}
