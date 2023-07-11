import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty({ message: 'Usename não pode estar vazio.' })
  @IsString({ message: 'Usename deve ser uma string.' })
  @Matches(/^[\p{L} ]+$/u, {
    message: 'Usename deve conter apenas letras e espaços.',
  })
  @Length(3, 60, { message: 'Usename deve ter entre 3 e 60 caracteres.' })
  @ApiProperty({ description: 'Usename do usuário.', example: 'user' })
  username: string;

  @IsString({ message: 'E-mail deve ser uma string.' })
  @IsNotEmpty({ message: 'E-mail não pode estar vazio.' })
  @IsEmail({}, { message: 'E-mail não é válido.' })
  @ApiProperty({
    description: 'E-mail do usuário.',
    example: 'email@account.com',
  })
  email: string;
}
