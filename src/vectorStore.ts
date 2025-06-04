import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export const createVectorStore = async (rawText: string) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const docs = await splitter.createDocuments([rawText]);
  const embeddings = new OpenAIEmbeddings();

  const store = await MemoryVectorStore.fromDocuments(docs, embeddings);
  return store.asRetriever();
};
