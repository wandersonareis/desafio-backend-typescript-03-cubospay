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
exports.AccountsController = void 0;
const openapi = require("@nestjs/swagger");
const account_decorator_1 = require("../../common/decorators/account.decorator");
const EmailUniqueException_1 = require("../../exceptions/EmailUniqueException");
const validation_filter_1 = require("../../filters/validation.filter");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const public_guard_1 = require("../auth/guards/public.guard");
const accounts_service_1 = require("./accounts.service");
const create_account_dto_1 = require("./dto/create-account.dto");
const update_account_dto_1 = require("./dto/update-account.dto");
const account_entity_1 = require("./entities/account.entity");
const email_unique_validation_pipe_1 = require("./pipes/email-unique-validation.pipe");
const UnauthorizedException_1 = require("../../exceptions/UnauthorizedException");
let AccountsController = class AccountsController {
    constructor(accountsService) {
        this.accountsService = accountsService;
    }
    async create(createAccountDto) {
        const createdAccount = await this.accountsService.create(createAccountDto);
        return createdAccount;
    }
    findOne(user) {
        return user;
    }
    async update(updateAccountDto, account) {
        const foundedAccount = await this.accountsService.findOne({
            where: {
                email: updateAccountDto.email,
                api_secret: (0, typeorm_1.Not)(account.api_secret),
            },
        });
        if (foundedAccount) {
            throw new validation_filter_1.ValidationException({
                email: 'Já existe conta cadastrada com o e-mail informado.',
            }, common_1.HttpStatus.CONFLICT);
        }
        await this.accountsService.update(account, updateAccountDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, public_guard_1.Public)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Essa é a rota que será utilizada para criar uma nova conta de usuario no sistema.',
    }),
    (0, swagger_1.ApiBody)({
        type: create_account_dto_1.CreateAccountDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: account_entity_1.Account }),
    (0, swagger_1.ApiConflictResponse)({
        description: 'Email Conflict',
        type: EmailUniqueException_1.EmailUniqueException,
    }),
    openapi.ApiResponse({ status: 201, type: require("./entities/account.entity").Account }),
    __param(0, (0, common_1.Body)(email_unique_validation_pipe_1.EmailUniqueValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountDto]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiSecurity)('ApiKeyAuth'),
    (0, swagger_1.ApiOperation)({
        summary: 'Essa é a rota que será utilizada para retornar os dados da sua conta.',
    }),
    (0, swagger_1.ApiOkResponse)({ type: account_entity_1.Account }),
    openapi.ApiResponse({ status: 200, type: require("./entities/account.entity").Account }),
    __param(0, (0, account_decorator_1.AccountFromApi)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.Account]),
    __metadata("design:returntype", account_entity_1.Account)
], AccountsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiSecurity)('ApiKeyAuth'),
    (0, swagger_1.ApiOperation)({
        summary: 'Essa é a rota que será chamada quando o usuário quiser realizar alterações das informações de sua própria conta.',
    }),
    (0, swagger_1.ApiBody)({ type: update_account_dto_1.UpdateAccountDto }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiConflictResponse)({
        description: 'Email Conflict',
        type: EmailUniqueException_1.EmailUniqueException,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'api_key missing',
        type: UnauthorizedException_1.UnauthorizedException,
    }),
    openapi.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, account_decorator_1.AccountFromApi)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_account_dto_1.UpdateAccountDto,
        account_entity_1.Account]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "update", null);
AccountsController = __decorate([
    (0, swagger_1.ApiTags)('Accounts'),
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService])
], AccountsController);
exports.AccountsController = AccountsController;
//# sourceMappingURL=accounts.controller.js.map