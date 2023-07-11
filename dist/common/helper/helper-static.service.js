"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const generate_api_key_1 = require("generate-api-key");
class Helper {
    static generateApiKey() {
        const hash = (0, generate_api_key_1.generateApiKey)({
            method: 'uuidv4',
            dashes: false,
            prefix: 'key_',
        });
        return hash;
    }
    static filterProperties(object, properties) {
        const partial = {};
        properties.forEach((property) => {
            if (property in object) {
                partial[property] = object[property];
            }
        });
        return partial;
    }
}
exports.Helper = Helper;
//# sourceMappingURL=helper-static.service.js.map