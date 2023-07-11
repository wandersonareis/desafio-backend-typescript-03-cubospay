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
exports.BilletPaymentDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const PaymentMethod_enum_1 = require("../enums/PaymentMethod.enum");
class BilletPaymentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number }, payment_method: { required: true, enum: require("../enums/PaymentMethod.enum").PaymentMethod }, client_name: { required: true, type: () => String }, client_email: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Valor do pagamento', example: 30000 }),
    __metadata("design:type", Number)
], BilletPaymentDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(PaymentMethod_enum_1.PaymentMethod),
    (0, swagger_1.ApiProperty)({ enum: PaymentMethod_enum_1.PaymentMethod, example: PaymentMethod_enum_1.PaymentMethod.BILLET }),
    __metadata("design:type", String)
], BilletPaymentDto.prototype, "payment_method", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Nome do cliente', example: 'João da Silva' }),
    __metadata("design:type", String)
], BilletPaymentDto.prototype, "client_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Email do cliente', example: 'joao@cliente.com' }),
    __metadata("design:type", String)
], BilletPaymentDto.prototype, "client_email", void 0);
exports.BilletPaymentDto = BilletPaymentDto;
//# sourceMappingURL=billet-payment.dto.js.map