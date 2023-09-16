import { Controller, Post, Body, Get } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { InsufficientFundsException } from '@/exceptions/InsufficientFundsException';
import { TransferValidationPipe } from './pipes/TransferValidation.pipe';
import { TransferData } from '../../common/inferfaces/transfer-data.interface';
import { AccountFromApi } from '@/common/decorators/account.decorator';
import { Account } from '../accounts/entities/account.entity';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ValidationException } from '@/filters/validation.filter';
import { CreateTransferDto } from './dto/create-transfers.dto';
import { IBalanceResponse } from './interface/balance-response.interface';
import { UnauthorizedException } from '@/exceptions/UnauthorizedException';

@ApiTags('Transfers')
@ApiSecurity('ApiKeyAuth')
@Controller()
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Post('transfers')
  @ApiOperation({
    description:
      'Essa é a rota que será chamada quando o usuario quiser transferir valores da sua conta para outra conta existente.',
  })
  @ApiBody({
    type: CreateTransferDto,
  })
  @ApiNoContentResponse({ description: 'Success' })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: InsufficientFundsException,
  })
  @ApiUnauthorizedResponse({
    description: 'api_key missing',
    type: UnauthorizedException,
  })
  async transferTransaction(
    @Body(TransferValidationPipe) transferData: TransferData,
    @AccountFromApi() account: Account,
  ): Promise<void> {
    if (transferData.amount > account.balance) {
      throw new ValidationException({ amount: 'Saldo insuficiente' });
    }

    this.transfersService.createTransfer(transferData, account);
  }

  @Get('balance')
  @ApiOperation({
    description:
      'Essa é a rota que será chamada quando o usuario quiser consultar o saldo disponível na conta.',
  })
  @ApiOkResponse({
    description: 'Success',
    schema: { example: { balance: 100 } },
  })
  @ApiUnauthorizedResponse({
    description: 'api_key missing',
    type: UnauthorizedException,
  })
  getBalance(@AccountFromApi() account: Account): IBalanceResponse {
    const { balance } = account;
    return { balance };
  }
}
