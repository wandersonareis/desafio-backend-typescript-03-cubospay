"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationFilter = exports.ValidationException = void 0;
const common_1 = require("@nestjs/common");
class ValidationException extends common_1.HttpException {
    constructor(validationErrors, statusCode = common_1.HttpStatus.BAD_REQUEST) {
        super(validationErrors, statusCode);
        this.validationErrors = validationErrors;
    }
}
exports.ValidationException = ValidationException;
let ValidationFilter = class ValidationFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(exception.getStatus()).json({
            statusCode: exception.getStatus(),
            success: false,
            message: '',
            error: exception.validationErrors,
        });
    }
};
ValidationFilter = __decorate([
    (0, common_1.Catch)(ValidationException)
], ValidationFilter);
exports.ValidationFilter = ValidationFilter;
//# sourceMappingURL=validation.filter.js.map