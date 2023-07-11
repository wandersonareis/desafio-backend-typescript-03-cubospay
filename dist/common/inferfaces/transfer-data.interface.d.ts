import { CreateTransferDto } from '@/modules/transfers/dto/create-transfers.dto';
import { Account } from '../../modules/accounts/entities/account.entity';
export interface TransferData extends CreateTransferDto {
    destination_account: Account;
}
