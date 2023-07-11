import { PipeTransform, Injectable, Inject } from '@nestjs/common';
import { TransactionsService } from '../transactions.service';

@Injectable()
export class IdToTransactionPipe implements PipeTransform {
  @Inject(TransactionsService)
  private readonly transactionsService: TransactionsService;
  async transform(id: number) {
    const entity = await this.transactionsService.findOneOrFail({
      where: { id },
    });

    return entity;
  }
}
