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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transaction_entity_1 = require("./entities/transaction.entity");
const PaymentMethod_enum_1 = require("./enums/PaymentMethod.enum");
const PaymentStatus_enum_1 = require("./enums/PaymentStatus.enum");
const uuid_1 = require("uuid");
const validation_filter_1 = require("../../filters/validation.filter");
let TransactionsService = class TransactionsService {
    constructor(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    createTransactions(createTransactionDto) {
        const transaction = this.transactionsRepository.create(createTransactionDto);
        const paymentActionMap = {
            [PaymentMethod_enum_1.PaymentMethod.CREDIT]: () => {
                transaction.paid_at = new Date();
                transaction.status = PaymentStatus_enum_1.PaymentStatus.PAID;
            },
            [PaymentMethod_enum_1.PaymentMethod.BILLET]: () => {
                transaction.bar_code = (0, uuid_1.v4)();
            },
        };
        const paymentAction = paymentActionMap[createTransactionDto.payment_method];
        paymentAction();
        return this.transactionsRepository.save(transaction);
    }
    async payTransaction(transaction, account) {
        const transactionPaid = this.transactionsRepository.create(transaction);
        if (transactionPaid.status === PaymentStatus_enum_1.PaymentStatus.PENDING) {
            account.balance += transaction.amount;
            transactionPaid.account = account;
        }
        transactionPaid.status = PaymentStatus_enum_1.PaymentStatus.PAID;
        this.transactionsRepository.merge(transaction, transactionPaid);
        this.transactionsRepository.save(transaction);
    }
    async cancelTransaction(transaction, account) {
        const transactionCanceled = this.transactionsRepository.create(transaction);
        if (transactionCanceled.status === PaymentStatus_enum_1.PaymentStatus.PAID) {
            account.balance -= transaction.amount;
            transactionCanceled.account = account;
        }
        transactionCanceled.status = PaymentStatus_enum_1.PaymentStatus.CANCELED;
        this.transactionsRepository.merge(transaction, transactionCanceled);
        this.transactionsRepository.save(transaction);
    }
    async findOneOrFail(options) {
        const founded = await this.transactionsRepository.findOne(options);
        if (!founded) {
            throw new validation_filter_1.ValidationException({
                transaction: 'Transação não encontrada',
            });
        }
        return founded;
    }
    findOneById(id) {
        return this.transactionsRepository.findOne({ where: { id } });
    }
};
TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transactions)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map