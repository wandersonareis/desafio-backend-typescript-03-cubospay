import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpCode,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { AccountFromApi } from '@/common/decorators/account.decorator';
import { Account } from '../accounts/entities/account.entity';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { PaymentValidationPipe } from './pipes/payment-method.pipe';
import { Transactions } from './entities/transaction.entity';
import { PaymentStatus } from './enums/PaymentStatus.enum';
import { IdToTransactionPipe } from './pipes/id-validation.pipe';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiExtraModels,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { CreditPaymentDto } from './dtos/credit-payment.dto';
import { BilletPaymentDto } from './dtos/billet-payment.dto';
import { ValidationException } from '@/filters/validation.filter';
import { PaymentMethodException } from '@/exceptions/payment-method-exception';
import { TransactionNotFoundException } from '@/exceptions/TransactionNotFoundException';
import { UnauthorizedException } from '@/exceptions/UnauthorizedException';

@ApiTags('Transactions')
@ApiSecurity('ApiKeyAuth')
@Controller('transaction')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @ApiOperation({
    summary:
      'Essa é a rota que será chamada quando o usuario quiser realizar uma transação via cartão de crédito ou boleto bancário.  ',
  })
  @ApiExtraModels(CreditPaymentDto, BilletPaymentDto)
  @ApiBody({
    schema: {
      oneOf: [
        {
          $ref: getSchemaPath(CreditPaymentDto),
        },
        {
          $ref: getSchemaPath(BilletPaymentDto),
        },
      ],
    },
  })
  @ApiExtraModels(CreditPaymentDto, BilletPaymentDto)
  @ApiCreatedResponse({
    status: 201,
    content: {
      'application/json': {
        examples: {
          credit_payment: {
            summary: 'Cartão de crédito',
            value: {
              id: 8,
              amount: 30000,
              payment_method: 'credit',
              status: 'paid',
              card_number: '1111222233334444',
              card_name: 'João da Silva',
              card_expiration_date: '03/29',
              card_cvv: '123',
              client_name: 'João',
              client_email: 'joao@email.com',
              paid_at: '2022-06-10T12:28:01.483Z',
              created_at: '2022-06-10T12:28:01.483Z',
              bar_code: null,
            },
          },
          billet_payment: {
            summary: 'Boleto bancário',
            value: {
              id: 200,
              amount: 30000,
              payment_method: 'billet',
              status: 'pending',
              card_number: null,
              card_name: null,
              card_expiration_date: null,
              card_cvv: null,
              client_name: 'João',
              client_email: 'joao@email.com',
              paid_at: null,
              created_at: '2022-06-10T12:28:01.483Z',
              bar_code: 'abcdef123456...',
            },
          },
        },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: PaymentMethodException,
  })
  @ApiUnauthorizedResponse({
    description: 'api_key missing',
    type: UnauthorizedException,
  })
  async createTransaction(
    @Body(PaymentValidationPipe) createTransactionDto: CreateTransactionDto,
  ): Promise<Transactions> {
    return this.transactionsService.createTransactions(createTransactionDto);
  }

  @Patch(':id')
  @HttpCode(204)
  @ApiOperation({
    summary:
      'Essa é a rota que será chamada quando o usuário quiser cancelar uma transação existente.  ',
  })
  @ApiParam({
    name: 'id',
    description: 'ID da transação',
    type: String,
  })
  @ApiNoContentResponse()
  @ApiBadRequestResponse({
    schema: {
      example: {
        statusCode: 400,
        success: false,
        message: '',
        error: { transaction: 'Transação está cancelada' },
      },
    },
  })
  @ApiNotFoundResponse({ type: TransactionNotFoundException })
  @ApiUnauthorizedResponse({
    description: 'api_key missing',
    type: UnauthorizedException,
  })
  async cancelTransaction(
    @Param('id', IdToTransactionPipe) transaction: Transactions,
    @AccountFromApi() account: Account,
  ): Promise<void> {
    if (transaction.status === PaymentStatus.CANCELED) {
      throw new ValidationException({
        transaction: 'Transação já está cancelada',
      } as Record<string, string>);
    }
    await this.transactionsService.cancelTransaction(transaction, account);
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'ID da transação',
    type: String,
  })
  @ApiOperation({
    summary:
      'Essa é a rota que será chamada quando o usuário quiser detalhar uma transação existente.  ',
  })
  @ApiOkResponse({
    type: Transactions,
  })
  @ApiNotFoundResponse({
    type: TransactionNotFoundException,
  })
  @ApiUnauthorizedResponse({
    description: 'api_key missing',
    type: UnauthorizedException,
  })
  async findTransaction(
    @Param('id', IdToTransactionPipe) transaction: Transactions,
  ): Promise<Transactions> {
    return transaction;
  }

  @Patch('pay/:id')
  @HttpCode(204)
  @ApiOperation({
    summary:
      'Essa é a rota que será chamada quando o usuário quiser simular o pagamento uma transação existente.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID da transação',
    type: String,
  })
  @ApiNoContentResponse({ description: 'No content' })
  @ApiNotFoundResponse({ type: TransactionNotFoundException })
  @ApiBadRequestResponse({
    content: {
      'application/json': {
        examples: {
          paid: {
            summary: 'Pago',
            value: {
              statusCode: 400,
              success: false,
              message: '',
              error: {
                transaction: 'Transação já está paga',
              },
            },
          },
          cancel: {
            summary: 'Cancelado',
            value: {
              statusCode: 400,
              success: false,
              message: '',
              error: { transaction: 'Transação está cancelada' },
            },
          },
        },
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: 'api_key missing',
    type: UnauthorizedException,
  })
  async payTransaction(
    @Param('id', IdToTransactionPipe) transaction: Transactions,
    @AccountFromApi() account: Account,
  ): Promise<any> {
    const validationErrors: Record<string, string> = {};

    if (transaction.status === PaymentStatus.CANCELED) {
      validationErrors.transaction = 'Transação está cancelada';
    }

    if (transaction.status === PaymentStatus.PAID) {
      validationErrors.transaction = 'Transação já está paga';
    }

    if (Object.keys(validationErrors).length) {
      throw new ValidationException(validationErrors);
    }

    await this.transactionsService.payTransaction(transaction, account);
  }
}
