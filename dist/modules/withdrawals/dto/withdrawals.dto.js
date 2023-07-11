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
exports.WithdrawalDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class WithdrawalDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { balance: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O valor deve ser informado' }),
    (0, class_validator_1.IsInt)({ message: 'O valor de balance deve ser um número inteiro' }),
    (0, swagger_1.ApiProperty)({
        description: 'Valor a ser sacado em centavos',
        example: 100,
    }),
    __metadata("design:type", Number)
], WithdrawalDto.prototype, "balance", void 0);
exports.WithdrawalDto = WithdrawalDto;
//# sourceMappingURL=withdrawals.dto.js.map