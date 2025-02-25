import { Module } from '@nestjs/common';
import { HashingService } from './hashing.service';
import { HashingController } from './hashing.controller';

@Module({
  providers: [HashingService],
  controllers: [HashingController],
})
export class HashingModule {}
