import { Account } from '@/modules/accounts/entities/account.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IWithdrawal } from '../transactions/transactions.service';
import { WithdrawalDto } from './dto/withdrawals.dto';
import { Withdrawals } from './entities/withdrawals.entity';

@Injectable()
export class WithdrawalsService {
  constructor(
    @InjectRepository(Withdrawals)
    private readonly withdrawalsRepository: Repository<Withdrawals>,
  ) {}

  createWithdrawal(
    withdraw: WithdrawalDto,
    account: Account,
  ): Promise<IWithdrawal> {
    account.balance -= withdraw.balance;
    const withdrawal = this.withdrawalsRepository.create({
      amount: withdraw.balance,
      account: account,
    });
    return this.withdrawalsRepository.save(withdrawal);
  }
}
