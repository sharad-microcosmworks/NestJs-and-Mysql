import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('server is running on port no:. 3333')
  await app.listen(3333);
} 
bootstrap();
