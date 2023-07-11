import { PipeTransform, Injectable } from '@nestjs/common';
import { AccountsService } from '../../accounts/accounts.service';
import { TransferData } from '../../../common/inferfaces/transfer-data.interface';
import { ValidationException } from '@/filters/validation.filter';

@Injectable()
export class TransferValidationPipe implements PipeTransform<any> {
  constructor(private userService: AccountsService) {}

  async transform(value: TransferData) {
    const isExists = await this.userService.findOneById(value.account_to);

    if (!isExists) {
      throw new ValidationException({
        account_to: 'Conta de destino não encontrada',
      });
    }

    const transferData: TransferData = {
      ...value,
      destination_account: isExists,
    };

    return transferData;
  }
}
