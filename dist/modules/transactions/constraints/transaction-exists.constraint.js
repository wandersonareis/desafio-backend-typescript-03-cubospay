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
exports.TransactionIdExistsRule = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const transactions_service_1 = require("../transactions.service");
let TransactionIdExistsRule = class TransactionIdExistsRule {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    async validate(value) {
        const transaction = await this.transactionsService.findOneOrFail({
            where: { id: value },
        });
        return !!transaction;
    }
};
TransactionIdExistsRule = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'TransactionExists', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionIdExistsRule);
exports.TransactionIdExistsRule = TransactionIdExistsRule;
//# sourceMappingURL=transaction-exists.constraint.js.map