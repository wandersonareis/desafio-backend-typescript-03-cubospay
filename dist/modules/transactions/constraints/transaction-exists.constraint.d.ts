import { ValidatorConstraintInterface } from 'class-validator';
import { TransactionsService } from '../transactions.service';
export declare class TransactionIdExistsRule implements ValidatorConstraintInterface {
    private transactionsService;
    constructor(transactionsService: TransactionsService);
    validate(value: number): Promise<boolean>;
}
