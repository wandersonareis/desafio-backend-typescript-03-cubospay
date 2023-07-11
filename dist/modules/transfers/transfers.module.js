"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransfersModule = void 0;
const common_1 = require("@nestjs/common");
const transfers_service_1 = require("./transfers.service");
const transfers_controller_1 = require("./transfers.controller");
const typeorm_1 = require("@nestjs/typeorm");
const transfers_entity_1 = require("./entities/transfers.entity");
const accounts_module_1 = require("../accounts/accounts.module");
const validation_filter_1 = require("../../filters/validation.filter");
let TransfersModule = class TransfersModule {
};
TransfersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([transfers_entity_1.Transfers]), accounts_module_1.AccountsModule],
        controllers: [transfers_controller_1.TransfersController],
        providers: [transfers_service_1.TransfersService, typeorm_1.TypeOrmModule, validation_filter_1.ValidationException],
        exports: [transfers_service_1.TransfersService, typeorm_1.TypeOrmModule],
    })
], TransfersModule);
exports.TransfersModule = TransfersModule;
//# sourceMappingURL=transfers.module.js.map