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
exports.Withdrawals = void 0;
const openapi = require("@nestjs/swagger");
const account_entity_1 = require("../../accounts/entities/account.entity");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
let Withdrawals = class Withdrawals {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, amount: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, account: { required: true, type: () => require("../../accounts/entities/account.entity").Account }, account_id: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], Withdrawals.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Withdrawals.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], Withdrawals.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_entity_1.Account, (account) => account.withdrawals, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'account_id' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", account_entity_1.Account)
], Withdrawals.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'account_id' }),
    __metadata("design:type", Number)
], Withdrawals.prototype, "account_id", void 0);
Withdrawals = __decorate([
    (0, typeorm_1.Entity)()
], Withdrawals);
exports.Withdrawals = Withdrawals;
//# sourceMappingURL=withdrawals.entity.js.map