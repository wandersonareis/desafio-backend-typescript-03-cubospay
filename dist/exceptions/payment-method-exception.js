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
exports.PaymentMethodException = void 0;
const swagger_1 = require("@nestjs/swagger");
class PaymentMethodException {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 400 }),
    __metadata("design:type", Number)
], PaymentMethodException.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], PaymentMethodException.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PaymentMethodException.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: { payment_method: 'Método de pagamento inválido' },
    }),
    __metadata("design:type", Object)
], PaymentMethodException.prototype, "error", void 0);
exports.PaymentMethodException = PaymentMethodException;
//# sourceMappingURL=payment-method-exception.js.map