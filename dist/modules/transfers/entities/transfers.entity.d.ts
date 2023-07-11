import { Account } from '@/modules/accounts/entities/account.entity';
export declare class Transfers {
    id: number;
    amount: number;
    fromAccount: Account;
    toAccount: Account;
    from_account_id: number;
    to_account_id: number;
    created_at: Date;
}
