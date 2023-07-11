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
exports.TransactionsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const transactions_service_1 = require("./transactions.service");
const account_decorator_1 = require("../../common/decorators/account.decorator");
const account_entity_1 = require("../accounts/entities/account.entity");
const create_transaction_dto_1 = require("./dtos/create-transaction.dto");
const payment_method_pipe_1 = require("./pipes/payment-method.pipe");
const transaction_entity_1 = require("./entities/transaction.entity");
const PaymentStatus_enum_1 = require("./enums/PaymentStatus.enum");
const id_validation_pipe_1 = require("./pipes/id-validation.pipe");
const swagger_1 = require("@nestjs/swagger");
const credit_payment_dto_1 = require("./dtos/credit-payment.dto");
const billet_payment_dto_1 = require("./dtos/billet-payment.dto");
const validation_filter_1 = require("../../filters/validation.filter");
const payment_method_exception_1 = require("../../exceptions/payment-method-exception");
const TransactionNotFoundException_1 = require("../../exceptions/TransactionNotFoundException");
const UnauthorizedException_1 = require("../../exceptions/UnauthorizedException");
let TransactionsController = class TransactionsController {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    async createTransaction(createTransactionDto) {
        return this.transactionsService.createTransactions(createTransactionDto);
    }
    async cancelTransaction(transaction, account) {
        if (transaction.status === PaymentStatus_enum_1.PaymentStatus.CANCELED) {
            throw new validation_filter_1.ValidationException({
                transaction: 'Transação já está cancelada',
            });
        }
        await this.transactionsService.cancelTransaction(transaction, account);
    }
    async findTransaction(transaction) {
        return transaction;
    }
    async payTransaction(transaction, account) {
        const validationErrors = {};
        if (transaction.status === PaymentStatus_enum_1.PaymentStatus.CANCELED) {
            validationErrors.transaction = 'Transação está cancelada';
        }
        if (transaction.status === PaymentStatus_enum_1.PaymentStatus.PAID) {
            validationErrors.transaction = 'Transação já está paga';
        }
        if (Object.keys(validationErrors).length) {
            throw new validation_filter_1.ValidationException(validationErrors);
        }
        await this.transactionsService.payTransaction(transaction, account);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Essa é a rota que será chamada quando o usuario quiser realizar uma transação via cartão de crédito ou boleto bancário.  ',
    }),
    (0, swagger_1.ApiExtraModels)(credit_payment_dto_1.CreditPaymentDto, billet_payment_dto_1.BilletPaymentDto),
    (0, swagger_1.ApiBody)({
        schema: {
            oneOf: [
                {
                    $ref: (0, swagger_1.getSchemaPath)(credit_payment_dto_1.CreditPaymentDto),
                },
                {
                    $ref: (0, swagger_1.getSchemaPath)(billet_payment_dto_1.BilletPaymentDto),
                },
            ],
        },
    }),
    (0, swagger_1.ApiExtraModels)(credit_payment_dto_1.CreditPaymentDto, billet_payment_dto_1.BilletPaymentDto),
    (0, swagger_1.ApiCreatedResponse)({
        status: 201,
        content: {
            'application/json': {
                examples: {
                    credit_payment: {
                        summary: 'Cartão de crédito',
                        value: {
                            id: 8,
                            amount: 30000,
                            payment_method: 'credit',
                            status: 'paid',
                            card_number: '1111222233334444',
                            card_name: 'João da Silva',
                            card_expiration_date: '03/29',
                            card_cvv: '123',
                            client_name: 'João',
                            client_email: 'joao@email.com',
                            paid_at: '2022-06-10T12:28:01.483Z',
                            created_at: '2022-06-10T12:28:01.483Z',
                            bar_code: null,
                        },
                    },
                    billet_payment: {
                        summary: 'Boleto bancário',
                        value: {
                            id: 200,
                            amount: 30000,
                            payment_method: 'billet',
                            status: 'pending',
                            card_number: null,
                            card_name: null,
                            card_expiration_date: null,
                            card_cvv: null,
                            client_name: 'João',
                            client_email: 'joao@email.com',
                            paid_at: null,
                            created_at: '2022-06-10T12:28:01.483Z',
                            bar_code: 'abcdef123456...',
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Bad Request',
        type: payment_method_exception_1.PaymentMethodException,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'api_key missing', type: UnauthorizedException_1.UnauthorizedException }),
    openapi.ApiResponse({ status: 201, type: require("./entities/transaction.entity").Transactions }),
    __param(0, (0, common_1.Body)(payment_method_pipe_1.PaymentValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_dto_1.CreateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "createTransaction", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiOperation)({
        summary: 'Essa é a rota que será chamada quando o usuário quiser cancelar uma transação existente.  ',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID da transação',
        type: String,
    }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiBadRequestResponse)({
        schema: {
            example: {
                statusCode: 400,
                success: false,
                message: '',
                error: { transaction: 'Transação está cancelada' },
            },
        },
    }),
    (0, swagger_1.ApiNotFoundResponse)({ type: TransactionNotFoundException_1.TransactionNotFoundException }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'api_key missing', type: UnauthorizedException_1.UnauthorizedException }),
    openapi.ApiResponse({ status: 204 }),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdToTransactionPipe)),
    __param(1, (0, account_decorator_1.AccountFromApi)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_entity_1.Transactions,
        account_entity_1.Account]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "cancelTransaction", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID da transação',
        type: String,
    }),
    (0, swagger_1.ApiOperation)({
        summary: 'Essa é a rota que será chamada quando o usuário quiser detalhar uma transação existente.  ',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: transaction_entity_1.Transactions,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        type: TransactionNotFoundException_1.TransactionNotFoundException,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'api_key missing', type: UnauthorizedException_1.UnauthorizedException }),
    openapi.ApiResponse({ status: 200, type: require("./entities/transaction.entity").Transactions }),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdToTransactionPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_entity_1.Transactions]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "findTransaction", null);
__decorate([
    (0, common_1.Patch)('pay/:id'),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiOperation)({
        summary: 'Essa é a rota que será chamada quando o usuário quiser simular o pagamento uma transação existente.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID da transação',
        type: String,
    }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'No content' }),
    (0, swagger_1.ApiNotFoundResponse)({ type: TransactionNotFoundException_1.TransactionNotFoundException }),
    (0, swagger_1.ApiBadRequestResponse)({
        content: {
            'application/json': {
                examples: {
                    paid: {
                        summary: 'Pago',
                        value: {
                            statusCode: 400,
                            success: false,
                            message: '',
                            error: {
                                transaction: 'Transação já está paga',
                            },
                        },
                    },
                    cancel: {
                        summary: 'Cancelado',
                        value: {
                            statusCode: 400,
                            success: false,
                            message: '',
                            error: { transaction: 'Transação está cancelada' },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'api_key missing', type: UnauthorizedException_1.UnauthorizedException }),
    openapi.ApiResponse({ status: 204, type: Object }),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdToTransactionPipe)),
    __param(1, (0, account_decorator_1.AccountFromApi)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_entity_1.Transactions,
        account_entity_1.Account]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "payTransaction", null);
TransactionsController = __decorate([
    (0, swagger_1.ApiTags)('Transactions'),
    (0, swagger_1.ApiSecurity)('ApiKeyAuth'),
    (0, common_1.Controller)('transaction'),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map