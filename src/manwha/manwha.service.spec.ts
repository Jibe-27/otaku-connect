import { Test, TestingModule } from '@nestjs/testing';
import { ManwhaService } from './manwha.service';

describe('ManwhaService', () => {
  let service: ManwhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManwhaService],
    }).compile();

    service = module.get<ManwhaService>(ManwhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
