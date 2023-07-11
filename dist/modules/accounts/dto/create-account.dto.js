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
exports.CreateAccountDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAccountDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String, minLength: 3, maxLength: 60, pattern: "/^[\\p{L} ]+$/u" }, email: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Usename não pode estar vazio.' }),
    (0, class_validator_1.IsString)({ message: 'Usename deve ser uma string.' }),
    (0, class_validator_1.Matches)(/^[\p{L} ]+$/u, {
        message: 'Usename deve conter apenas letras e espaços.',
    }),
    (0, class_validator_1.Length)(3, 60, { message: 'Usename deve ter entre 3 e 60 caracteres.' }),
    (0, swagger_1.ApiProperty)({ description: 'Usename do usuário.', example: 'user' }),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'E-mail deve ser uma string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'E-mail não pode estar vazio.' }),
    (0, class_validator_1.IsEmail)({}, { message: 'E-mail não é válido.' }),
    (0, swagger_1.ApiProperty)({
        description: 'E-mail do usuário.',
        example: 'email@account.com',
    }),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "email", void 0);
exports.CreateAccountDto = CreateAccountDto;
//# sourceMappingURL=create-account.dto.js.map