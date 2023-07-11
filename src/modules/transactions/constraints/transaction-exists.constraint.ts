import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { TransactionsService } from '../transactions.service';

@ValidatorConstraint({ name: 'TransactionExists', async: true })
@Injectable()
export class TransactionIdExistsRule implements ValidatorConstraintInterface {
  constructor(private transactionsService: TransactionsService) {}

  async validate(value: number) {
    const transaction = await this.transactionsService.findOneOrFail({
      where: { id: value },
    });
    return !!transaction;
  }
}
