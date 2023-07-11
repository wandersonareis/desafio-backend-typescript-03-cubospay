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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const accounts_service_1 = require("../../accounts/accounts.service");
const validation_filter_1 = require("../../../filters/validation.filter");
let TransferValidationPipe = class TransferValidationPipe {
    constructor(userService) {
        this.userService = userService;
    }
    async transform(value) {
        const isExists = await this.userService.findOneById(value.account_to);
        if (!isExists) {
            throw new validation_filter_1.ValidationException({
                account_to: 'Conta de destino não encontrada',
            });
        }
        const transferData = {
            ...value,
            destination_account: isExists,
        };
        return transferData;
    }
};
TransferValidationPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService])
], TransferValidationPipe);
exports.TransferValidationPipe = TransferValidationPipe;
//# sourceMappingURL=TransferValidation.pipe.js.map