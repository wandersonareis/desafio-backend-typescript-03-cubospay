"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsModule = void 0;
const common_1 = require("@nestjs/common");
const accounts_service_1 = require("./accounts.service");
const accounts_controller_1 = require("./accounts.controller");
const typeorm_1 = require("@nestjs/typeorm");
const account_entity_1 = require("./entities/account.entity");
const validation_filter_1 = require("../../filters/validation.filter");
let AccountsModule = class AccountsModule {
};
AccountsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([account_entity_1.Account])],
        controllers: [accounts_controller_1.AccountsController],
        providers: [accounts_service_1.AccountsService, typeorm_1.TypeOrmModule, validation_filter_1.ValidationException],
        exports: [accounts_service_1.AccountsService, typeorm_1.TypeOrmModule],
    })
], AccountsModule);
exports.AccountsModule = AccountsModule;
//# sourceMappingURL=accounts.module.js.map