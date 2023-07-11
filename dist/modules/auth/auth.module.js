"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const passport_1 = require("@nestjs/passport");
const apikey_strategy_1 = require("./strategies/apikey.strategy");
const apikey_guard_1 = require("./guards/apikey.guard");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const account_entity_1 = require("../accounts/entities/account.entity");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule, typeorm_1.TypeOrmModule.forFeature([account_entity_1.Account])],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            apikey_strategy_1.ApiKeyStrategy,
            apikey_guard_1.ApiKeyGuard,
            {
                provide: core_1.APP_GUARD,
                useClass: apikey_guard_1.ApiKeyGuard,
            },
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map