"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentValidationPipe = void 0;
const validation_filter_1 = require("../../../filters/validation.filter");
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const billet_payment_dto_1 = require("../dtos/billet-payment.dto");
const credit_payment_dto_1 = require("../dtos/credit-payment.dto");
const PaymentMethod_enum_1 = require("../enums/PaymentMethod.enum");
let PaymentValidationPipe = class PaymentValidationPipe {
    async transform(value) {
        const { payment_method } = value;
        const paymentDtoMap = {
            [PaymentMethod_enum_1.PaymentMethod.CREDIT]: credit_payment_dto_1.CreditPaymentDto,
            [PaymentMethod_enum_1.PaymentMethod.BILLET]: billet_payment_dto_1.BilletPaymentDto,
        };
        const PaymentDtoClass = paymentDtoMap[payment_method];
        if (PaymentDtoClass) {
            const paymentDto = (0, class_transformer_1.plainToClass)(PaymentDtoClass, value);
            await this.validateDto(paymentDto);
        }
        else {
            throw new common_1.BadRequestException('Método de pagamento inválido');
        }
        return value;
    }
    async validateDto(dto) {
        const errors = await (0, class_validator_1.validate)(dto);
        const errMsg = {};
        errors.forEach((err) => {
            if (!err.constraints)
                return;
            errMsg[err.property] = Object.values(err.constraints);
            throw new validation_filter_1.ValidationException(errMsg);
        });
    }
};
PaymentValidationPipe = __decorate([
    (0, common_1.Injectable)()
], PaymentValidationPipe);
exports.PaymentValidationPipe = PaymentValidationPipe;
//# sourceMappingURL=payment-method.pipe.js.map