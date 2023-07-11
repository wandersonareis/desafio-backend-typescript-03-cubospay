import { Account } from '@/modules/accounts/entities/account.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from '../auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy) {
  constructor(private authService: AuthService) {
    super(
      {
        header: 'api_key',
        prefix: '',
      },
      false,
    );
  }

  async validate(apiKey: string): Promise<Account> {
    const key = await this.authService.validateApiKey(apiKey);

    if (!key) {
      throw new UnauthorizedException();
    }

    return key;
  }
}
