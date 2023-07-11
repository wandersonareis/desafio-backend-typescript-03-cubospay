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
exports.TransactionNotFoundException = void 0;
const swagger_1 = require("@nestjs/swagger");
class TransactionNotFoundException {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], TransactionNotFoundException.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], TransactionNotFoundException.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], TransactionNotFoundException.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: { transaction: 'Transação não encontrada' },
    }),
    __metadata("design:type", Object)
], TransactionNotFoundException.prototype, "error", void 0);
exports.TransactionNotFoundException = TransactionNotFoundException;
//# sourceMappingURL=TransactionNotFoundException.js.map