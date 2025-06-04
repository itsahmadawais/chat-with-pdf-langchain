import * as fs from 'fs';
import pdfParse from 'pdf-parse';

export const extractTextFromPDF = async (filePath: string): Promise<string> => {
  const pdfBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(pdfBuffer);
  return data.text;
};
