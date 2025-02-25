import { Test, TestingModule } from '@nestjs/testing';
import { HashingController } from './hashing.controller';

describe('HashingController', () => {
  let controller: HashingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HashingController],
    }).compile();

    controller = module.get<HashingController>(HashingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
