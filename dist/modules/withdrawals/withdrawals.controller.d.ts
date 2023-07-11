import { Account } from '../accounts/entities/account.entity';
import { WithdrawalDto } from './dto/withdrawals.dto';
import { WithdrawalsService } from './withdrawals.service';
export declare class WithdrawalsController {
    private readonly withdrawalsService;
    constructor(withdrawalsService: WithdrawalsService);
    createWithdrawal(withdrawalDto: WithdrawalDto, account: Account): Promise<void>;
}
