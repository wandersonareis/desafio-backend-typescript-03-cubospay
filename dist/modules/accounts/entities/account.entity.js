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
exports.Account = void 0;
const openapi = require("@nestjs/swagger");
const transaction_entity_1 = require("../../transactions/entities/transaction.entity");
const transfers_entity_1 = require("../../transfers/entities/transfers.entity");
const withdrawals_entity_1 = require("../../withdrawals/entities/withdrawals.entity");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Account = class Account {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, username: { required: true, type: () => String }, email: { required: true, type: () => String }, api_secret: { required: true, type: () => String }, balance: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Account.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Account.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], Account.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], Account.prototype, "api_secret", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Account.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => withdrawals_entity_1.Withdrawals, (withdrawal) => withdrawal.account),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Array)
], Account.prototype, "withdrawals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transfers_entity_1.Transfers, (transfer) => transfer.fromAccount),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Array)
], Account.prototype, "sentTransfers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transfers_entity_1.Transfers, (transfer) => transfer.toAccount),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Array)
], Account.prototype, "receivedTransfers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_entity_1.Transactions, (transaction) => transaction.account),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Array)
], Account.prototype, "transactions", void 0);
Account = __decorate([
    (0, typeorm_1.Entity)()
], Account);
exports.Account = Account;
//# sourceMappingURL=account.entity.js.map