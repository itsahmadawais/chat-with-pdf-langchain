import { ChatOpenAI } from "@langchain/openai";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { RunnableSequence } from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";
import { StringOutputParser } from "@langchain/core/output_parsers";
import type { BaseRetriever } from "@langchain/core/retrievers";
import Env from "./env/Env";

export const askQuestion = async (retriever: BaseRetriever, query: string) => {
  const model = new ChatOpenAI({ temperature: 0, openAIApiKey: Env.OPENAI_API_KEY });

  const combineDocsChain = RunnableSequence.from([
    (input: { input: string; context: any }) => {
      return `Answer the question based on the context below:\n\n${formatDocumentsAsString(input.context)}\n\nQuestion: ${input.input}`;
    },
    model,
    new StringOutputParser()
  ]);

  const chain = await createRetrievalChain({
    retriever,
    combineDocsChain,
  });

  const res = await chain.invoke({ input: query });

  return res;
};
