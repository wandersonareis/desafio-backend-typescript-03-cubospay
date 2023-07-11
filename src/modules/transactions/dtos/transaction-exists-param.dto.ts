import { IdParam } from '@/common/dto/id-param.dto';
import { Validate } from 'class-validator';
import { TransactionIdExistsRule } from '../constraints/transaction-exists.constraint';

export default class TransactionIdParam extends IdParam {
  @Validate(TransactionIdExistsRule, {
    message: 'Transação não encontrada',
  })
  id: number;
}
