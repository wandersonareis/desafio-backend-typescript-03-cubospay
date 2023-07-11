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
exports.EmailUniqueException = void 0;
const swagger_1 = require("@nestjs/swagger");
class EmailUniqueException {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 409 }),
    __metadata("design:type", Number)
], EmailUniqueException.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], EmailUniqueException.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], EmailUniqueException.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: { email: 'Já existe conta cadastrada com o e-mail informado.' },
    }),
    __metadata("design:type", Object)
], EmailUniqueException.prototype, "error", void 0);
exports.EmailUniqueException = EmailUniqueException;
//# sourceMappingURL=EmailUniqueException.js.map