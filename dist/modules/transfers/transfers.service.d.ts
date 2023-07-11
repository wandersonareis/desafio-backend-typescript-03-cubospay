import { Repository } from 'typeorm';
import { Account } from '../accounts/entities/account.entity';
import { TransferData } from '../../common/inferfaces/transfer-data.interface';
import { Transfers } from './entities/transfers.entity';
export declare class TransfersService {
    private transfersRepository;
    constructor(transfersRepository: Repository<Transfers>);
    createTransfer(transferData: TransferData, account: Account): Promise<void>;
}
