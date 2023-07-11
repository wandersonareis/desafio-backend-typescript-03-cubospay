import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Account } from '../accounts/entities/account.entity';
import { TransferData } from '../../common/inferfaces/transfer-data.interface';
import { Transfers } from './entities/transfers.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransfersService {
  constructor(
    @InjectRepository(Transfers)
    private transfersRepository: Repository<Transfers>,
  ) {}
  async createTransfer(
    transferData: TransferData,
    account: Account,
  ): Promise<void> {
    account.balance -= transferData.amount;
    transferData.destination_account.balance += transferData.amount;

    const transfer = this.transfersRepository.create();
    transfer.amount = transferData.amount;
    transfer.fromAccount = account;
    transfer.toAccount = transferData.destination_account;

    await this.transfersRepository.save(transfer);
  }
}
