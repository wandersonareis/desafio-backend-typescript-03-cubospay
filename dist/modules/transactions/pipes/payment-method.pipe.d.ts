import { PipeTransform } from '@nestjs/common';
import { CreateTransactionDto } from '../dtos/create-transaction.dto';
export declare class PaymentValidationPipe implements PipeTransform {
    transform(value: CreateTransactionDto): Promise<CreateTransactionDto>;
    private validateDto;
}
