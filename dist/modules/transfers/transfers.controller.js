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
exports.TransfersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const transfers_service_1 = require("./transfers.service");
const InsufficientFundsException_1 = require("../../exceptions/InsufficientFundsException");
const TransferValidation_pipe_1 = require("./pipes/TransferValidation.pipe");
const account_decorator_1 = require("../../common/decorators/account.decorator");
const account_entity_1 = require("../accounts/entities/account.entity");
const swagger_1 = require("@nestjs/swagger");
const validation_filter_1 = require("../../filters/validation.filter");
const create_transfers_dto_1 = require("./dto/create-transfers.dto");
const UnauthorizedException_1 = require("../../exceptions/UnauthorizedException");
let TransfersController = class TransfersController {
    constructor(transfersService) {
        this.transfersService = transfersService;
    }
    async transferTransaction(transferData, account) {
        if (transferData.amount > account.balance) {
            throw new validation_filter_1.ValidationException({ amount: 'Saldo insuficiente' });
        }
        this.transfersService.createTransfer(transferData, account);
    }
    getBalance(account) {
        const { balance } = account;
        return { balance };
    }
};
__decorate([
    (0, common_1.Post)('transfers'),
    (0, swagger_1.ApiOperation)({
        description: 'Essa é a rota que será chamada quando o usuario quiser transferir valores da sua conta para outra conta existente.',
    }),
    (0, swagger_1.ApiBody)({
        type: create_transfers_dto_1.CreateTransferDto,
    }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Success' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Bad Request',
        type: InsufficientFundsException_1.InsufficientFundsException,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'api_key missing', type: UnauthorizedException_1.UnauthorizedException }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)(TransferValidation_pipe_1.TransferValidationPipe)),
    __param(1, (0, account_decorator_1.AccountFromApi)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, account_entity_1.Account]),
    __metadata("design:returntype", Promise)
], TransfersController.prototype, "transferTransaction", null);
__decorate([
    (0, common_1.Get)('balance'),
    (0, swagger_1.ApiOperation)({
        description: 'Essa é a rota que será chamada quando o usuario quiser consultar o saldo disponível na conta.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Success',
        schema: { example: { balance: 100 } },
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'api_key missing', type: UnauthorizedException_1.UnauthorizedException }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, account_decorator_1.AccountFromApi)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.Account]),
    __metadata("design:returntype", Object)
], TransfersController.prototype, "getBalance", null);
TransfersController = __decorate([
    (0, swagger_1.ApiTags)('Transfers'),
    (0, swagger_1.ApiSecurity)('ApiKeyAuth'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [transfers_service_1.TransfersService])
], TransfersController);
exports.TransfersController = TransfersController;
//# sourceMappingURL=transfers.controller.js.map