import { extractTextFromPDF } from "./pdfProcessor";
import { createVectorStore } from "./vectorStore";
import { askQuestion } from "./chat";
import * as readline from "readline";

const run = async () => {
  const filePath = "json_tutorial.pdf";
  const rawText = await extractTextFromPDF(filePath);
  const retriever = await createVectorStore(rawText);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt("Ask about the PDF > ");
  rl.prompt();

  rl.on("line", async (line) => {
    try {
      const response = await askQuestion(retriever, line);
      console.log("Answer:", response.answer);
    } catch (error) {
      console.error("Error:", error);
    }
    rl.prompt();
  });

  rl.on("close", () => {
    console.log("Goodbye!");
    process.exit(0);
  });
};

run();
