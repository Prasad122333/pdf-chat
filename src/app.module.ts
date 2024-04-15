import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfChatModelService } from './pdf-chat-model/pdf-chat-model.service';
import { PdfChatModelController } from './pdf-chat-model/pdf-chat-model.controller';

@Module({
  imports: [],
  controllers: [AppController, PdfChatModelController],
  providers: [AppService, PdfChatModelService],
})
export class AppModule {}
