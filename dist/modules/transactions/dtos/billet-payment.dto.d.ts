import { PaymentMethod } from '../enums/PaymentMethod.enum';
export declare class BilletPaymentDto {
    amount: number;
    payment_method: PaymentMethod;
    client_name: string;
    client_email: string;
}
