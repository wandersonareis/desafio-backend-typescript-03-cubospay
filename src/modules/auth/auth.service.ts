import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../accounts/entities/account.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}
  validateApiKey(apiKey: string): Promise<Account | null> {
    const account = this.accountRepository.findOne({
      where: { api_secret: apiKey },
    });
    return account;
  }
}
