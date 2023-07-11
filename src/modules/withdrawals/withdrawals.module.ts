import { Module } from '@nestjs/common';
import { WithdrawalsService } from './withdrawals.service';
import { WithdrawalsController } from './withdrawals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Withdrawals } from './entities/withdrawals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Withdrawals])],
  controllers: [WithdrawalsController],
  providers: [WithdrawalsService, TypeOrmModule],
  exports: [TypeOrmModule],
})
export class WithdrawalsModule {}
