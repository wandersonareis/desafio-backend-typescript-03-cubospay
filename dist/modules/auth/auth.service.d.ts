import { Repository } from 'typeorm';
import { Account } from '../accounts/entities/account.entity';
export declare class AuthService {
    private readonly accountRepository;
    constructor(accountRepository: Repository<Account>);
    validateApiKey(apiKey: string): Promise<Account | null>;
}
