import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Account } from '../accounts/entities/account.entity';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { Transactions } from './entities/transaction.entity';
import { PaymentMethod } from './enums/PaymentMethod.enum';
import { PaymentStatus } from './enums/PaymentStatus.enum';
import { v4 as uuidv4 } from 'uuid';
import { ValidationException } from '@/filters/validation.filter';

export interface IWithdrawal {
  amount: number;
  account_id: number;
}

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private readonly transactionsRepository: Repository<Transactions>,
  ) {}

  createTransactions(createTransactionDto: CreateTransactionDto) {
    const transaction =
      this.transactionsRepository.create(createTransactionDto);

    const paymentActionMap = {
      [PaymentMethod.CREDIT]: () => {
        transaction.paid_at = new Date();
        transaction.status = PaymentStatus.PAID;
      },
      [PaymentMethod.BILLET]: () => {
        transaction.bar_code = uuidv4();
      },
    };

    const paymentAction = paymentActionMap[createTransactionDto.payment_method];

    paymentAction();

    return this.transactionsRepository.save(transaction);
  }

  async payTransaction(
    transaction: Transactions,
    account: Account,
  ): Promise<void> {
    const transactionPaid: Transactions =
      this.transactionsRepository.create(transaction);

    if (transactionPaid.status === PaymentStatus.PENDING) {
      account.balance += transaction.amount;
      transactionPaid.account = account;
    }
    transactionPaid.status = PaymentStatus.PAID;

    this.transactionsRepository.merge(transaction, transactionPaid);
    this.transactionsRepository.save(transaction);
  }

  async cancelTransaction(
    transaction: Transactions,
    account: Account,
  ): Promise<void> {
    const transactionCanceled: Transactions =
      this.transactionsRepository.create(transaction);

    if (transactionCanceled.status === PaymentStatus.PAID) {
      account.balance -= transaction.amount;
      transactionCanceled.account = account;
    }
    transactionCanceled.status = PaymentStatus.CANCELED;

    this.transactionsRepository.merge(transaction, transactionCanceled);
    this.transactionsRepository.save(transaction);
  }

  async findOneOrFail(options: FindOneOptions): Promise<Transactions> {
    const founded = await this.transactionsRepository.findOne(options);

    if (!founded) {
      throw new ValidationException({
        transaction: 'Transação não encontrada',
      });
    }

    return founded;
  }

  findOneById(id: number): Promise<any> {
    return this.transactionsRepository.findOne({ where: { id } });
  }
}
