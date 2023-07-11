import { PipeTransform } from '@nestjs/common';
import { AccountsService } from '../../accounts/accounts.service';
import { TransferData } from '../../../common/inferfaces/transfer-data.interface';
export declare class TransferValidationPipe implements PipeTransform<any> {
    private userService;
    constructor(userService: AccountsService);
    transform(value: TransferData): Promise<TransferData>;
}
