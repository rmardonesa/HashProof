import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    // eslint-disable-next-line prettier/prettier
    origin: [
            'http://localhost:4200',
            'https://hashproof.vercel.app',
            'https://supabase.com',
            ],
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
