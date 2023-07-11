"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./modules/auth/auth.module");
const env_helper_1 = require("./common/helper/env.helper");
const accounts_module_1 = require("./modules/accounts/accounts.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_service_1 = require("./common/typeorm/typeorm.service");
const transactions_module_1 = require("./modules/transactions/transactions.module");
const transfers_module_1 = require("./modules/transfers/transfers.module");
const withdrawals_module_1 = require("./modules/withdrawals/withdrawals.module");
const envFilePath = (0, env_helper_1.getEnvPath)('./src/common/envs');
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath,
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({ useClass: typeorm_service_1.TypeOrmConfigService }),
            auth_module_1.AuthModule,
            accounts_module_1.AccountsModule,
            transactions_module_1.TransactionsModule,
            transfers_module_1.TransfersModule,
            withdrawals_module_1.WithdrawalsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map