import { PipeTransform } from '@nestjs/common';
import { CreateAccountDto } from '../dto/create-account.dto';
export declare class EmailUniqueValidationPipe implements PipeTransform {
    private readonly accountsService;
    transform(object: CreateAccountDto): Promise<void>;
}
