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
exports.Transfers = void 0;
const openapi = require("@nestjs/swagger");
const account_entity_1 = require("../../accounts/entities/account.entity");
const typeorm_1 = require("typeorm");
let Transfers = class Transfers {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, amount: { required: true, type: () => Number }, fromAccount: { required: true, type: () => require("../../accounts/entities/account.entity").Account }, toAccount: { required: true, type: () => require("../../accounts/entities/account.entity").Account }, from_account_id: { required: true, type: () => Number }, to_account_id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Transfers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Transfers.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_entity_1.Account, (account) => account.sentTransfers, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'from_account_id' }),
    __metadata("design:type", account_entity_1.Account)
], Transfers.prototype, "fromAccount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_entity_1.Account, (account) => account.receivedTransfers, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'to_account_id' }),
    __metadata("design:type", account_entity_1.Account)
], Transfers.prototype, "toAccount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'from_account_id', type: 'int' }),
    __metadata("design:type", Number)
], Transfers.prototype, "from_account_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'to_account_id', type: 'int' }),
    __metadata("design:type", Number)
], Transfers.prototype, "to_account_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Transfers.prototype, "created_at", void 0);
Transfers = __decorate([
    (0, typeorm_1.Entity)()
], Transfers);
exports.Transfers = Transfers;
//# sourceMappingURL=transfers.entity.js.map