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
exports.WithdrawalsController = void 0;
const openapi = require("@nestjs/swagger");
const account_decorator_1 = require("../../common/decorators/account.decorator");
const InsufficientFundsException_1 = require("../../exceptions/InsufficientFundsException");
const validation_filter_1 = require("../../filters/validation.filter");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const account_entity_1 = require("../accounts/entities/account.entity");
const withdrawals_dto_1 = require("./dto/withdrawals.dto");
const withdrawals_service_1 = require("./withdrawals.service");
const UnauthorizedException_1 = require("../../exceptions/UnauthorizedException");
let WithdrawalsController = class WithdrawalsController {
    constructor(withdrawalsService) {
        this.withdrawalsService = withdrawalsService;
    }
    async createWithdrawal(withdrawalDto, account) {
        if (account.balance < withdrawalDto.balance) {
            throw new validation_filter_1.ValidationException({
                balance: 'Saldo insuficiente',
            });
        }
        await this.withdrawalsService.createWithdrawal(withdrawalDto, account);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiOperation)({
        summary: 'Essa é a rota que será chamada quando o usuario quiser sacar valores da sua conta.',
    }),
    (0, swagger_1.ApiBody)({
        type: withdrawals_dto_1.WithdrawalDto,
    }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'No Content' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Bad Request',
        type: InsufficientFundsException_1.InsufficientFundsException,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'api_key missing', type: UnauthorizedException_1.UnauthorizedException }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, account_decorator_1.AccountFromApi)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [withdrawals_dto_1.WithdrawalDto,
        account_entity_1.Account]),
    __metadata("design:returntype", Promise)
], WithdrawalsController.prototype, "createWithdrawal", null);
WithdrawalsController = __decorate([
    (0, swagger_1.ApiTags)('withdraw'),
    (0, swagger_1.ApiSecurity)('ApiKeyAuth'),
    (0, common_1.Controller)('withdraw'),
    __metadata("design:paramtypes", [withdrawals_service_1.WithdrawalsService])
], WithdrawalsController);
exports.WithdrawalsController = WithdrawalsController;
//# sourceMappingURL=withdrawals.controller.js.map