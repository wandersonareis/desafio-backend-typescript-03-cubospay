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
const openapi = require("@nestjs/swagger");
const id_param_dto_1 = require("../../../common/dto/id-param.dto");
const class_validator_1 = require("class-validator");
const transaction_exists_constraint_1 = require("../constraints/transaction-exists.constraint");
class TransactionIdParam extends id_param_dto_1.IdParam {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, class_validator_1.Validate)(transaction_exists_constraint_1.TransactionIdExistsRule, {
        message: 'Transação não encontrada',
    }),
    __metadata("design:type", Number)
], TransactionIdParam.prototype, "id", void 0);
exports.default = TransactionIdParam;
//# sourceMappingURL=transaction-exists-param.dto.js.map