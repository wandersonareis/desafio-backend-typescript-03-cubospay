import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateTransferDto {
  @IsNotEmpty({ message: 'Amount é obrigatário' })
  @IsInt({ message: 'Amount deve ser um número inteiro' })
  @ApiProperty()
  amount: number;

  @IsNotEmpty({ message: 'accout_to é obrigatário' })
  @IsInt({ message: 'accout_to deve ser um número inteiro' })
  @ApiProperty()
  account_to: number;
}
