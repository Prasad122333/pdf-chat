import { Test, TestingModule } from '@nestjs/testing';
import { PdfChatModelService } from './pdf-chat-model.service';

describe('PdfChatModelService', () => {
  let service: PdfChatModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfChatModelService],
    }).compile();

    service = module.get<PdfChatModelService>(PdfChatModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
