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
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const account_entity_1 = require("./entities/account.entity");
const helper_static_service_1 = require("../../common/helper/helper-static.service");
let AccountsService = class AccountsService {
    constructor(accountsRepository) {
        this.accountsRepository = accountsRepository;
    }
    create(createAccountDto) {
        const account = this.accountsRepository.create(createAccountDto);
        account.api_secret = helper_static_service_1.Helper.generateApiKey();
        return this.accountsRepository.save(account);
    }
    findOne(options) {
        return this.accountsRepository.findOne(options);
    }
    findOneById(id) {
        return this.accountsRepository.findOne({ where: { id } });
    }
    findOneByEmail(email) {
        return this.accountsRepository.findOne({ where: { email } });
    }
    findOneByApiKey(apiKey) {
        return this.accountsRepository.findOne({ where: { api_secret: apiKey } });
    }
    getBalance(account) {
        return this.accountsRepository.findOne({
            where: { api_secret: account.api_secret },
            select: ['balance'],
        });
    }
    update(account, updateAccountDto) {
        this.accountsRepository.merge(account, updateAccountDto);
        return this.accountsRepository.save(account);
    }
};
AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(account_entity_1.Account)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AccountsService);
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map