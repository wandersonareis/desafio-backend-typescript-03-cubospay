import { PaymentMethod } from '../enums/PaymentMethod.enum';
export declare class CreditPaymentDto {
    amount: number;
    payment_method: PaymentMethod;
    card_number: string;
    card_expiration_date: string;
    card_cvv: string;
    card_name: string;
    client_name: string;
    client_email: string;
}
