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
exports.Transactions = void 0;
const openapi = require("@nestjs/swagger");
const account_entity_1 = require("../../accounts/entities/account.entity");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const PaymentMethod_enum_1 = require("../enums/PaymentMethod.enum");
const PaymentStatus_enum_1 = require("../enums/PaymentStatus.enum");
let Transactions = class Transactions {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, amount: { required: true, type: () => Number }, payment_method: { required: true, enum: require("../enums/PaymentMethod.enum").PaymentMethod }, status: { required: true, enum: require("../enums/PaymentStatus.enum").PaymentStatus }, bar_code: { required: false, type: () => String }, card_number: { required: true, type: () => String }, card_expiration_date: { required: true, type: () => String }, card_cvv: { required: true, type: () => String }, card_name: { required: true, type: () => String }, client_name: { required: true, type: () => String }, client_email: { required: true, type: () => String }, paid_at: { required: false, type: () => Date }, created_at: { required: true, type: () => Date }, account_id: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Transactions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Transactions.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'payment_method',
        length: 50,
        enum: PaymentMethod_enum_1.PaymentMethod,
    }),
    __metadata("design:type", String)
], Transactions.prototype, "payment_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: PaymentStatus_enum_1.PaymentStatus, default: PaymentStatus_enum_1.PaymentStatus.PENDING }),
    __metadata("design:type", String)
], Transactions.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bar_code', nullable: true }),
    __metadata("design:type", String)
], Transactions.prototype, "bar_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'card_number', type: 'varchar', length: 16, nullable: true }),
    __metadata("design:type", String)
], Transactions.prototype, "card_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'card_expiration_date', length: 5, nullable: true }),
    __metadata("design:type", String)
], Transactions.prototype, "card_expiration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'card_cvv', type: 'varchar', length: 3, nullable: true }),
    __metadata("design:type", String)
], Transactions.prototype, "card_cvv", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'card_name', length: 100, nullable: true }),
    __metadata("design:type", String)
], Transactions.prototype, "card_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_name', length: 100, nullable: true }),
    __metadata("design:type", String)
], Transactions.prototype, "client_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_email', length: 100, nullable: true }),
    __metadata("design:type", String)
], Transactions.prototype, "client_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'paid_at', nullable: true }),
    __metadata("design:type", Date)
], Transactions.prototype, "paid_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Transactions.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, typeorm_1.ManyToOne)(() => account_entity_1.Account, (account) => account.transactions, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'account_id' }),
    __metadata("design:type", account_entity_1.Account)
], Transactions.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.RelationId)((transaction) => transaction.account),
    __metadata("design:type", Number)
], Transactions.prototype, "account_id", void 0);
Transactions = __decorate([
    (0, typeorm_1.Entity)()
], Transactions);
exports.Transactions = Transactions;
//# sourceMappingURL=transaction.entity.js.map