import { ValidationException } from '@/filters/validation.filter';
import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { BilletPaymentDto } from '../dtos/billet-payment.dto';
import { CreateTransactionDto } from '../dtos/create-transaction.dto';
import { CreditPaymentDto } from '../dtos/credit-payment.dto';
import { PaymentMethod } from '../enums/PaymentMethod.enum';

@Injectable()
export class PaymentValidationPipe implements PipeTransform {
  async transform(value: CreateTransactionDto): Promise<CreateTransactionDto> {
    const { payment_method } = value;

    const paymentDtoMap = {
      [PaymentMethod.CREDIT]: CreditPaymentDto,
      [PaymentMethod.BILLET]: BilletPaymentDto,
    };

    const PaymentDtoClass = paymentDtoMap[payment_method];

    if (PaymentDtoClass) {
      const paymentDto = plainToClass(PaymentDtoClass, value);
      await this.validateDto(paymentDto);
    } else {
      throw new BadRequestException('Método de pagamento inválido');
    }

    return value;
  }

  private async validateDto(dto: object): Promise<void> {
    const errors = await validate(dto);

    const errMsg: Record<string, any> = {};
    errors.forEach((err) => {
      if (!err.constraints) return;
      errMsg[err.property] = Object.values(err.constraints);
      throw new ValidationException(errMsg);
    });
  }
}
