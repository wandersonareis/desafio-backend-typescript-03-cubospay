import { ApiProperty } from "@nestjs/swagger";

export class UnauthorizedException {
    @ApiProperty({ example: 401 })
    statusCode: number;

    @ApiProperty({ example: false })
    success: boolean;

    @ApiProperty({ example: 'Para acessar este recurso uma api_key deve ser enviada' })
    message: string;

    @ApiProperty({
    example: "Unauthorized" })
    error: string;
}