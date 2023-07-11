import { Transactions } from '@/modules/transactions/entities/transaction.entity';
import { Transfers } from '@/modules/transfers/entities/transfers.entity';
import { Withdrawals } from '@/modules/withdrawals/entities/withdrawals.entity';
export declare class Account {
    id: number;
    username: string;
    email: string;
    api_secret: string;
    balance: number;
    withdrawals: Withdrawals[];
    sentTransfers: Transfers[];
    receivedTransfers: Transfers[];
    transactions: Transactions[];
}
