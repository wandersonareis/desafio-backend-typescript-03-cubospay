import { PipeTransform } from '@nestjs/common';
export declare class IdToTransactionPipe implements PipeTransform {
    private readonly transactionsService;
    transform(id: number): Promise<import("../entities/transaction.entity").Transactions>;
}
