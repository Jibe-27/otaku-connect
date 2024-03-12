import { Test, TestingModule } from '@nestjs/testing';
import { ManwhaController } from './manwha.controller';

describe('ManwhaController', () => {
  let controller: ManwhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManwhaController],
    }).compile();

    controller = module.get<ManwhaController>(ManwhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
