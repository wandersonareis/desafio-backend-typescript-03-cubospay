import { Account } from '@/modules/accounts/entities/account.entity';
export declare class Withdrawals {
    id: number;
    amount: number;
    created_at: Date;
    account: Account;
    account_id: number;
}
