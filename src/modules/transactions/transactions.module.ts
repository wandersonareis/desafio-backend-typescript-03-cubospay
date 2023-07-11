import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transactions } from './entities/transaction.entity';
import { Account } from '../accounts/entities/account.entity';
import { TransactionIdExistsRule } from './constraints/transaction-exists.constraint';
import { Transfers } from '../transfers/entities/transfers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transfers, Transactions, Account])],
  controllers: [TransactionsController],
  providers: [TransactionsService, TypeOrmModule, TransactionIdExistsRule],
})
export class TransactionsModule {}
