import { Account } from '@/modules/accounts/entities/account.entity';
import { PaymentMethod } from '../enums/PaymentMethod.enum';
import { PaymentStatus } from '../enums/PaymentStatus.enum';
export declare class Transactions {
    id: number;
    amount: number;
    payment_method: PaymentMethod;
    status: PaymentStatus;
    bar_code?: string;
    card_number: string;
    card_expiration_date: string;
    card_cvv: string;
    card_name: string;
    client_name: string;
    client_email: string;
    paid_at?: Date;
    created_at: Date;
    account: Account;
    account_id: number;
}
