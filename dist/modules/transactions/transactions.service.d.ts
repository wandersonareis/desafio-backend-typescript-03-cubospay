import { FindOneOptions, Repository } from 'typeorm';
import { Account } from '../accounts/entities/account.entity';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { Transactions } from './entities/transaction.entity';
export interface IWithdrawal {
    amount: number;
    account_id: number;
}
export declare class TransactionsService {
    private readonly transactionsRepository;
    constructor(transactionsRepository: Repository<Transactions>);
    createTransactions(createTransactionDto: CreateTransactionDto): Promise<Transactions>;
    payTransaction(transaction: Transactions, account: Account): Promise<void>;
    cancelTransaction(transaction: Transactions, account: Account): Promise<void>;
    findOneOrFail(options: FindOneOptions): Promise<Transactions>;
    findOneById(id: number): Promise<any>;
}
