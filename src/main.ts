import { UserModule } from './user/user.module';
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { warn } from 'console';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from './shared/pipes/validation.pipe';
import { MasterModule } from './master/master.module';
import { ValidationErrorFilter } from './shared/filters/validation-error.filter';
import { AllExceptionsFilter } from './shared/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ╦ ╦╔═╗╔═╗  ╔═╗╦  ╔═╗╔╗ ╔═╗╦    ╔═╗╦╔═╗╔═╗╔═╗
  // ║ ║╚═╗║╣   ║ ╦║  ║ ║╠╩╗╠═╣║    ╠═╝║╠═╝║╣ ╚═╗
  // ╚═╝╚═╝╚═╝  ╚═╝╩═╝╚═╝╚═╝╩ ╩╩═╝  ╩  ╩╩  ╚═╝╚═╝
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ValidationErrorFilter());
  // app.useGlobalFilters(new AllExceptionsFilter());

  // ╔═╗╦ ╦╔═╗╔═╗╔═╗╔═╗╦═╗
  // ╚═╗║║║╠═╣║ ╦║ ╦║╣ ╠╦╝
  // ╚═╝╚╩╝╩ ╩╚═╝╚═╝╚═╝╩╚═
  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [UserModule, MasterModule],
  });
  SwaggerModule.setup('api', app, document);

  // ╔╦╗╔═╗╔═╗╦╔╗╔╔═╗  ╔═╗╔╗╔╔╦╗  ╦  ╦╔═╗╔╦╗╔═╗╔╗╔  ╔╦╗╔═╗  ╔═╗╔═╗╦═╗╔╦╗
  // ║║║╣ ╠╣ ║║║║║╣    ╠═╣║║║ ║║  ║  ║╚═╗ ║ ║╣ ║║║   ║ ║ ║  ╠═╝║ ║╠╦╝ ║
  // ═╩╝╚═╝╚  ╩╝╚╝╚═╝  ╩ ╩╝╚╝═╩╝  ╩═╝╩╚═╝ ╩ ╚═╝╝╚╝   ╩ ╚═╝  ╩  ╚═╝╩╚═ ╩
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  warn(`APP IS LISTENING TO PORT ${PORT}`);
}
bootstrap();
