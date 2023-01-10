import { promises as fs } from 'fs';
import path from 'path';

export const readData = async <T>(filePathName: string) => {
  const jsonPath = path.join(process.cwd(), filePathName);
  const fileContent = await fs.readFile(jsonPath, 'utf8');
  return JSON.parse(fileContent) as T;
};
