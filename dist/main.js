"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const validation_filter_1 = require("./filters/validation.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    const port = config.get('PORT') || 8000;
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.useGlobalFilters(new validation_filter_1.ValidationFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        exceptionFactory: (errors) => {
            const errMsg = {};
            errors.forEach((err) => {
                if (!err.constraints)
                    return;
                errMsg[err.property] = Object.values(err.constraints);
            });
            return new validation_filter_1.ValidationException(errMsg);
        },
    }));
    const configSwagger = new swagger_1.DocumentBuilder()
        .setTitle('Cubospay')
        .setDescription('Um gateway de pagamentos,')
        .setVersion('1.0')
        .addSecurity('ApiKeyAuth', {
        type: 'apiKey',
        in: 'query',
        name: 'api_key',
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, configSwagger);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.enableCors();
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map