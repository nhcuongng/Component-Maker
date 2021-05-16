import { appendFileSync, existsSync } from 'fs';
import path from 'path';
import { createIndexFolderWrapper } from '../createFileContent/index.mjs';

export const appendExportTheEndOfFile = (absFolderDirectory, folderName) => {
  const indexFile = path.resolve(absFolderDirectory, '../index.ts')
  if (existsSync(indexFile)) {
    appendFileSync(indexFile, createIndexFolderWrapper(folderName))
  }
}