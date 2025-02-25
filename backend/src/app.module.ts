import * as crypto from 'crypto';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HashingModule } from './hashing/hashing.module';
import { RateLimitMiddleware } from './middleware/rate-limit.middleware';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: false,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }),
    }),
    HashingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // eslint-disable-next-line prettier/prettier
    consumer.apply(RateLimitMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
