"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountFromApi = void 0;
const common_1 = require("@nestjs/common");
exports.AccountFromApi = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=account.decorator.js.map