import { ValidationException } from '@/filters/validation.filter';
import { PipeTransform, Injectable, Inject, HttpStatus } from '@nestjs/common';
import { AccountsService } from '../accounts.service';
import { CreateAccountDto } from '../dto/create-account.dto';

@Injectable()
export class EmailUniqueValidationPipe implements PipeTransform {
  @Inject(AccountsService)
  private readonly accountsService: AccountsService;
  async transform(object: CreateAccountDto) {
    const entity = await this.accountsService.findOne({
      where: { email: object.email },
    });

    if (entity) {
      throw new ValidationException(
        { email: 'Já existe conta cadastrada com o e-mail informado.' },
        HttpStatus.CONFLICT,
      );
    }
  }
}
