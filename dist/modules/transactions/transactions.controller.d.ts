import { TransactionsService } from './transactions.service';
import { Account } from '../accounts/entities/account.entity';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { Transactions } from './entities/transaction.entity';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transactions>;
    cancelTransaction(transaction: Transactions, account: Account): Promise<void>;
    findTransaction(transaction: Transactions): Promise<Transactions>;
    payTransaction(transaction: Transactions, account: Account): Promise<any>;
}
