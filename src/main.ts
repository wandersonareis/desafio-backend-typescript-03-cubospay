import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  ValidationException,
  ValidationFilter,
} from './filters/validation.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT') || 8000;

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useGlobalFilters(new ValidationFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const errMsg: Record<string, any> = {};
        errors.forEach((err) => {
          if (!err.constraints) return;
          errMsg[err.property] = Object.values(err.constraints);
        });
        return new ValidationException(errMsg);
      },
    }),
  );

  const configSwagger = new DocumentBuilder()
    .setTitle('Cubospay')
    .setDescription('Um gateway de pagamentos,')
    .setVersion('1.0')
    .addSecurity('ApiKeyAuth', {
      type: 'apiKey',
      in: 'query',
      name: 'api_key',
    })
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  await app.listen(port);
}
bootstrap();
