import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { ValidationException } from '@/filters/validation.filter';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountsController],
  providers: [AccountsService, TypeOrmModule, ValidationException],
  exports: [AccountsService, TypeOrmModule],
})
export class AccountsModule {}
