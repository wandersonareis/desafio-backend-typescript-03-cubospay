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
exports.CreateTransferDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTransferDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number }, account_to: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Amount é obrigatário' }),
    (0, class_validator_1.IsInt)({ message: 'Amount deve ser um número inteiro' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateTransferDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'accout_to é obrigatário' }),
    (0, class_validator_1.IsInt)({ message: 'accout_to deve ser um número inteiro' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateTransferDto.prototype, "account_to", void 0);
exports.CreateTransferDto = CreateTransferDto;
//# sourceMappingURL=create-transfers.dto.js.map