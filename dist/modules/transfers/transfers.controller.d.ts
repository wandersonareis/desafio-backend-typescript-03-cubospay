import { TransfersService } from './transfers.service';
import { TransferData } from '../../common/inferfaces/transfer-data.interface';
import { Account } from '../accounts/entities/account.entity';
import { IBalanceResponse } from './interface/balance-response.interface';
export declare class TransfersController {
    private readonly transfersService;
    constructor(transfersService: TransfersService);
    transferTransaction(transferData: TransferData, account: Account): Promise<void>;
    getBalance(account: Account): IBalanceResponse;
}
