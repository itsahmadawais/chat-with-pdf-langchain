# Chat with PDF using Langchain and Node.js (TypeScript)

## Overview

This project allows you to **ask questions about the contents of a PDF file** using a conversational AI interface powered by Langchain and OpenAI. It extracts text from PDF documents, converts it into vector embeddings, and enables querying the document via a chat-like experience.

---

## Features

- Extract text content from PDF files.
- Split and embed PDF text using OpenAI embeddings.
- Create a vector store for efficient retrieval of relevant document chunks.
- Interactive command-line chat interface to ask questions about the PDF.
- Built with Node.js and TypeScript using Langchain ecosystem.

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- An OpenAI API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/itsahmadawais/chat-with-pdf-langchain.git
cd chat-with-pdf-langchain
````

2. Install dependencies:

```bash
npm install
```

3. Set your OpenAI API key as an environment variable:

```bash
export OPENAI_API_KEY="your_openai_api_key_here"
```

(on Windows use `set` or configure via `.env` file as you prefer)

---

## Usage

1. Place the PDF you want to query in the project folder or update the file path in `index.ts`.

2. Run the project:

```bash
npm run dev
```

3. You will get a prompt where you can type questions about the PDF content.

---

## Project Structure

* `src/pdfProcessor.ts`: Extracts text from PDF files.
* `src/vectorStore.ts`: Splits and embeds PDF text into a vector store.
* `src/chat.ts`: Runs the retrieval-based chat against the vector store.
* `src/index.ts`: Main entry point that ties everything together and provides the CLI interface.

---

## Notes

* This is a learning/demo project and may not handle very large PDFs efficiently.
* Customize chunk size, overlap, and model parameters in the source files as needed.
* Make sure your OpenAI API key is kept secure.
