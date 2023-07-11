import { FindOneOptions, Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
export declare class AccountsService {
    private readonly accountsRepository;
    constructor(accountsRepository: Repository<Account>);
    create(createAccountDto: CreateAccountDto): Promise<Account>;
    findOne(options: FindOneOptions<Account>): Promise<Account | null>;
    findOneById(id: number): Promise<Account | null>;
    findOneByEmail(email: string): Promise<Account | null>;
    findOneByApiKey(apiKey: string): Promise<Account | null>;
    getBalance(account: Account): Promise<Account | null>;
    update(account: Account, updateAccountDto: UpdateAccountDto): Promise<Account>;
}
