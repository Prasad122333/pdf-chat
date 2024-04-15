import { Injectable } from '@nestjs/common';
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { RetrievalQAChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";
import * as dotenv from "dotenv";

dotenv.config();

@Injectable()
export class PdfChatModelService {
 async getAnswer(question: string): Promise<any> {
    const loader = new PDFLoader("src//pdf-chat-model//GATE-VALVE.pdf");
    const docs = await loader.load();

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 20,
    });

    const splittedDocs = await splitter.splitDocuments(docs);

    const embeddings = new OpenAIEmbeddings();
    const vectorStore = await HNSWLib.fromDocuments(splittedDocs, embeddings);
    const vectorStoreRetriever = vectorStore.asRetriever();

    const model = new OpenAI({
      modelName: 'gpt-3.5-turbo'
    });

    const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);

    const answer = await chain.call({
      query: question
    });

    return {
      question,
      answer
    };
 }
}
