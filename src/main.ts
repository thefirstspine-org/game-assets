import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorFilter, LogsService, RequestsLoggerMiddleware } from '@thefirstspine/logs-nest';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  // Load dotenv config
  require('dotenv').config();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useGlobalFilters(new ErrorFilter(new LogsService()));
  app.use(RequestsLoggerMiddleware.use);
  await app.listen(process.env.PORT);
}
bootstrap();
