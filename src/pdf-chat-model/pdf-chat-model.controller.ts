import { Controller, Get, Query } from '@nestjs/common';
import { PdfChatModelService } from './pdf-chat-model.service';

@Controller('pdf-chat-model')
export class PdfChatModelController {
 constructor(private readonly pdfChatModelService: PdfChatModelService) {}

 @Get()
 async getAnswer(@Query('question') question: string) {
    return await this.pdfChatModelService.getAnswer(question);
 }
}
