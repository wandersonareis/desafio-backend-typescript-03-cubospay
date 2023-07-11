import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { getEnvPath } from './common/helper/env.helper';
import { AccountsModule } from './modules/accounts/accounts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '@/common/typeorm/typeorm.service';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { TransfersModule } from './modules/transfers/transfers.module';
import { WithdrawalsModule } from './modules/withdrawals/withdrawals.module';

const envFilePath: string = getEnvPath('./src/common/envs');

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    AuthModule,
    AccountsModule,
    TransactionsModule,
    TransfersModule,
    WithdrawalsModule,
  ],
})
export class AppModule {}
