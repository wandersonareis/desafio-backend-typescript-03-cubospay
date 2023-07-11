import { AccountFromApi } from '@/common/decorators/account.decorator';
import { InsufficientFundsException } from '@/exceptions/InsufficientFundsException';
import { ValidationException } from '@/filters/validation.filter';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiNoContentResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Account } from '../accounts/entities/account.entity';
import { WithdrawalDto } from './dto/withdrawals.dto';
import { WithdrawalsService } from './withdrawals.service';
import { UnauthorizedException } from '@/exceptions/UnauthorizedException';

@ApiTags('withdraw')
@ApiSecurity('ApiKeyAuth')
@Controller('withdraw')
export class WithdrawalsController {
  constructor(private readonly withdrawalsService: WithdrawalsService) {}

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({
    summary:
      'Essa é a rota que será chamada quando o usuario quiser sacar valores da sua conta.',
  })
  @ApiBody({
    type: WithdrawalDto,
  })
  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: InsufficientFundsException,
  })
  @ApiUnauthorizedResponse({ description: 'api_key missing', type: UnauthorizedException})
  async createWithdrawal(
    @Body() withdrawalDto: WithdrawalDto,
    @AccountFromApi() account: Account,
  ): Promise<void> {
    if (account.balance < withdrawalDto.balance) {
      throw new ValidationException({
        balance: 'Saldo insuficiente',
      } as Record<string, string>);
    }
    await this.withdrawalsService.createWithdrawal(withdrawalDto, account);
  }
}
