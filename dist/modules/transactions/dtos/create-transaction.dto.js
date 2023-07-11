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
exports.CreateTransactionDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const PaymentMethod_enum_1 = require("../enums/PaymentMethod.enum");
class CreateTransactionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number }, payment_method: { required: true, enum: require("../enums/PaymentMethod.enum").PaymentMethod }, card_number: { required: false, type: () => String }, card_expiration_date: { required: false, type: () => String, pattern: "/^(0[1-9]|1[0-2])\\/\\d{2}$/" }, card_cvv: { required: false, type: () => String, minLength: 3, maxLength: 3 }, card_name: { required: false, type: () => String }, client_name: { required: false, type: () => String }, client_email: { required: false, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Amount é obrigatário' }),
    (0, class_validator_1.IsInt)({ message: 'Amount deve ser um número inteiro' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'payment_method é obrigatário' }),
    (0, class_validator_1.IsEnum)(PaymentMethod_enum_1.PaymentMethod, {
        message: 'Método de pagamento inválido',
    }),
    (0, swagger_1.ApiProperty)({ enum: PaymentMethod_enum_1.PaymentMethod, enumName: 'PaymentMethod' }),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "payment_method", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'card_number deve ser uma string' }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "card_number", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'card_expiration_date deve ser uma string' }),
    (0, class_validator_1.Matches)(/^(0[1-9]|1[0-2])\/\d{2}$/, {
        message: 'A data de validade deve estar no formato MM/yy.',
    }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "card_expiration_date", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(3, 3, { message: 'card_cvv deve ter 3 caracteres' }),
    (0, class_validator_1.IsNumberString)({ no_symbols: true }, { message: 'card_cvv deve conter apenas números.' }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "card_cvv", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'card_name deve ser uma string' }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "card_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'client_name deve ser uma string' }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "client_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: 'client_email deve ser um email' }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "client_email", void 0);
exports.CreateTransactionDto = CreateTransactionDto;
//# sourceMappingURL=create-transaction.dto.js.map