"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsModule = void 0;
const common_1 = require("@nestjs/common");
const transactions_service_1 = require("./transactions.service");
const transactions_controller_1 = require("./transactions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const transaction_entity_1 = require("./entities/transaction.entity");
const account_entity_1 = require("../accounts/entities/account.entity");
const transaction_exists_constraint_1 = require("./constraints/transaction-exists.constraint");
const transfers_entity_1 = require("../transfers/entities/transfers.entity");
let TransactionsModule = class TransactionsModule {
};
TransactionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([transfers_entity_1.Transfers, transaction_entity_1.Transactions, account_entity_1.Account])],
        controllers: [transactions_controller_1.TransactionsController],
        providers: [transactions_service_1.TransactionsService, typeorm_1.TypeOrmModule, transaction_exists_constraint_1.TransactionIdExistsRule],
    })
], TransactionsModule);
exports.TransactionsModule = TransactionsModule;
//# sourceMappingURL=transactions.module.js.map