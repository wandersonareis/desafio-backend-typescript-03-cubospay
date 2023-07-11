"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditPaymentDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const PaymentMethod_enum_1 = require("../enums/PaymentMethod.enum");
class CreditPaymentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number }, payment_method: { required: true, enum: require("../enums/PaymentMethod.enum").PaymentMethod }, card_number: { required: true, type: () => String }, card_expiration_date: { required: true, type: () => String }, card_cvv: { required: true, type: () => String }, card_name: { required: true, type: () => String }, client_name: { required: true, type: () => String }, client_email: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Valor a ser pago', example: 30000 }),
    __metadata("design:type", Number)
], CreditPaymentDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(PaymentMethod_enum_1.PaymentMethod),
    (0, swagger_1.ApiProperty)({ enum: PaymentMethod_enum_1.PaymentMethod, example: PaymentMethod_enum_1.PaymentMethod.CREDIT }),
    __metadata("design:type", String)
], CreditPaymentDto.prototype, "payment_method", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Número do cartão de crédito',
        example: '1111222233334444',
    }),
    __metadata("design:type", String)
], CreditPaymentDto.prototype, "card_number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Data de expiração do cartão de crédito',
        example: '03/29',
    }),
    __metadata("design:type", String)
], CreditPaymentDto.prototype, "card_expiration_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'CVV do cartão de crédito', example: '123' }),
    __metadata("design:type", String)
], CreditPaymentDto.prototype, "card_cvv", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nome do titular do cartão de crédito',
        example: 'João da Silva',
    }),
    __metadata("design:type", String)
], CreditPaymentDto.prototype, "card_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Nome do cliente', example: 'João' }),
    __metadata("design:type", String)
], CreditPaymentDto.prototype, "client_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Email do cliente',
        example: 'joao@cliente.com',
    }),
    __metadata("design:type", String)
], CreditPaymentDto.prototype, "client_email", void 0);
exports.CreditPaymentDto = CreditPaymentDto;
//# sourceMappingURL=credit-payment.dto.js.map