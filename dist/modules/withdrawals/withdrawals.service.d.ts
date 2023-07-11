import { Account } from '@/modules/accounts/entities/account.entity';
import { Repository } from 'typeorm';
import { IWithdrawal } from '../transactions/transactions.service';
import { WithdrawalDto } from './dto/withdrawals.dto';
import { Withdrawals } from './entities/withdrawals.entity';
export declare class WithdrawalsService {
    private readonly withdrawalsRepository;
    constructor(withdrawalsRepository: Repository<Withdrawals>);
    createWithdrawal(withdraw: WithdrawalDto, account: Account): Promise<IWithdrawal>;
}
