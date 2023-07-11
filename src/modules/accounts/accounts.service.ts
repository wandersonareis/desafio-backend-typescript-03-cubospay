import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { Helper } from '@/common/helper/helper-static.service';
import { ValidationException } from '@/filters/validation.filter';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountsRepository: Repository<Account>,
  ) {}

  create(createAccountDto: CreateAccountDto): Promise<Account> {
    const account: Account = this.accountsRepository.create(createAccountDto);

    account.api_secret = Helper.generateApiKey();

    return this.accountsRepository.save(account);
  }

  findOne(options: FindOneOptions<Account>): Promise<Account | null> {
    return this.accountsRepository.findOne(options);
  }

  findOneById(id: number): Promise<Account | null> {
    return this.accountsRepository.findOne({ where: { id } });
  }

  findOneByEmail(email: string): Promise<Account | null> {
    return this.accountsRepository.findOne({ where: { email } });
  }

  findOneByApiKey(apiKey: string): Promise<Account | null> {
    return this.accountsRepository.findOne({ where: { api_secret: apiKey } });
  }

  getBalance(account: Account): Promise<Account | null> {
    return this.accountsRepository.findOne({
      where: { api_secret: account.api_secret },
      select: ['balance'],
    });
  }

  update(
    account: Account,
    updateAccountDto: UpdateAccountDto,
  ): Promise<Account> {
    this.accountsRepository.merge(account, updateAccountDto);
    return this.accountsRepository.save(account);
  }
}
