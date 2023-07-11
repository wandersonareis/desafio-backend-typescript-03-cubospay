import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class TypeOrmConfigService implements TypeOrmConfigService {
    private readonly config;
    constructor(config: ConfigService);
    createTypeOrmOptions(): TypeOrmModuleOptions;
}
