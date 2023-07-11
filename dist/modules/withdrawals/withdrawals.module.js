"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawalsModule = void 0;
const common_1 = require("@nestjs/common");
const withdrawals_service_1 = require("./withdrawals.service");
const withdrawals_controller_1 = require("./withdrawals.controller");
const typeorm_1 = require("@nestjs/typeorm");
const withdrawals_entity_1 = require("./entities/withdrawals.entity");
let WithdrawalsModule = class WithdrawalsModule {
};
WithdrawalsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([withdrawals_entity_1.Withdrawals])],
        controllers: [withdrawals_controller_1.WithdrawalsController],
        providers: [withdrawals_service_1.WithdrawalsService, typeorm_1.TypeOrmModule],
        exports: [typeorm_1.TypeOrmModule],
    })
], WithdrawalsModule);
exports.WithdrawalsModule = WithdrawalsModule;
//# sourceMappingURL=withdrawals.module.js.map