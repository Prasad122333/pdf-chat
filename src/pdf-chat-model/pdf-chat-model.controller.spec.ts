import { Test, TestingModule } from '@nestjs/testing';
import { PdfChatModelController } from './pdf-chat-model.controller';

describe('PdfChatModelController', () => {
  let controller: PdfChatModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfChatModelController],
    }).compile();

    controller = module.get<PdfChatModelController>(PdfChatModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
