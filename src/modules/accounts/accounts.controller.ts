import { AccountFromApi } from '@/common/decorators/account.decorator';
import { EmailUniqueException } from '@/exceptions/EmailUniqueException';
import { ValidationException } from '@/filters/validation.filter';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Not } from 'typeorm';
import { Public } from '../auth/guards/public.guard';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { EmailUniqueValidationPipe } from './pipes/email-unique-validation.pipe';
import { UnauthorizedException } from '@/exceptions/UnauthorizedException';

@ApiTags('Accounts')
@Controller('account')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @Public()
  @ApiOperation({
    summary:
      'Essa é a rota que será utilizada para criar uma nova conta de usuario no sistema.',
  })
  @ApiBody({
    type: CreateAccountDto,
  })
  @ApiCreatedResponse({ type: Account })
  @ApiConflictResponse({
    description: 'Email Conflict',
    type: EmailUniqueException,
  })
  async create(
    @Body(EmailUniqueValidationPipe) createAccountDto: CreateAccountDto,
  ): Promise<Account> {
    const createdAccount = await this.accountsService.create(createAccountDto);
    return createdAccount;
  }

  @Get()
  @ApiSecurity('ApiKeyAuth')
  @ApiOperation({
    summary:
      'Essa é a rota que será utilizada para retornar os dados da sua conta.',
  })
  @ApiOkResponse({ type: Account })
  findOne(@AccountFromApi() user: Account): Account {
    return user;
  }

  @Patch()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiSecurity('ApiKeyAuth')
  @ApiOperation({
    summary:
      'Essa é a rota que será chamada quando o usuário quiser realizar alterações das informações de sua própria conta.',
  })
  @ApiBody({ type: UpdateAccountDto })
  @ApiNoContentResponse()
  @ApiConflictResponse({
    description: 'Email Conflict',
    type: EmailUniqueException,
  })
  @ApiUnauthorizedResponse({
    description: 'api_key missing',
    type: UnauthorizedException,
  })
  async update(
    @Body() updateAccountDto: UpdateAccountDto,
    @AccountFromApi() account: Account,
  ): Promise<void> {
    const foundedAccount = await this.accountsService.findOne({
      where: {
        email: updateAccountDto.email,
        api_secret: Not(account.api_secret),
      },
    });

    if (foundedAccount) {
      throw new ValidationException(
        {
          email: 'Já existe conta cadastrada com o e-mail informado.',
        },
        HttpStatus.CONFLICT,
      );
    }
    await this.accountsService.update(account, updateAccountDto);
  }
}
