import { IErrorResponse } from '@/common/inferfaces/error-response.interface';
import { ApiProperty } from '@nestjs/swagger';

export class EmailUniqueException implements IErrorResponse {
  @ApiProperty({ example: 409 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: '' })
  message: string;

  @ApiProperty({
    example: { email: 'Já existe conta cadastrada com o e-mail informado.' },
  })
  error: Record<string, string[]>;
}
