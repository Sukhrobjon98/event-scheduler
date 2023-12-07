import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function createSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Test project')
    .setDescription('Event API')
    .setVersion('1.0')
    .addBasicAuth({
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {});
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  createSwagger(app);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();
console.log(new Date());
