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
exports.EmailUniqueValidationPipe = void 0;
const validation_filter_1 = require("../../../filters/validation.filter");
const common_1 = require("@nestjs/common");
const accounts_service_1 = require("../accounts.service");
let EmailUniqueValidationPipe = class EmailUniqueValidationPipe {
    async transform(object) {
        const entity = await this.accountsService.findOne({
            where: { email: object.email },
        });
        if (entity) {
            throw new validation_filter_1.ValidationException({ email: 'Já existe conta cadastrada com o e-mail informado.' }, common_1.HttpStatus.CONFLICT);
        }
    }
};
__decorate([
    (0, common_1.Inject)(accounts_service_1.AccountsService),
    __metadata("design:type", accounts_service_1.AccountsService)
], EmailUniqueValidationPipe.prototype, "accountsService", void 0);
EmailUniqueValidationPipe = __decorate([
    (0, common_1.Injectable)()
], EmailUniqueValidationPipe);
exports.EmailUniqueValidationPipe = EmailUniqueValidationPipe;
//# sourceMappingURL=email-unique-validation.pipe.js.map