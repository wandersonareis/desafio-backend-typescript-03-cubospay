import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { ApiKeyStrategy } from './strategies/apikey.strategy';
import { ApiKeyGuard } from './guards/apikey.guard';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../accounts/entities/account.entity';

@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([Account])],
  controllers: [AuthController],
  providers: [
    AuthService,
    ApiKeyStrategy,
    ApiKeyGuard,
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
  ],
})
export class AuthModule {}
