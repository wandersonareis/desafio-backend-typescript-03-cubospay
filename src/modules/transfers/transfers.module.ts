import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transfers } from './entities/transfers.entity';
import { AccountsModule } from '../accounts/accounts.module';
import { ValidationException } from '@/filters/validation.filter';

@Module({
  imports: [TypeOrmModule.forFeature([Transfers]), AccountsModule],
  controllers: [TransfersController],
  providers: [TransfersService, TypeOrmModule, ValidationException],
  exports: [TransfersService, TypeOrmModule],
})
export class TransfersModule {}
