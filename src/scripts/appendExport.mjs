import { appendFileSync, existsSync } from 'fs';
import path from 'path';
import { createIndexLargeComponent } from '../createFileContent/index.mjs';

export const appendExportTheEndOfFile = (absFolderDirectory, folderName) => {
  const indexFile = path.resolve(absFolderDirectory, '../index.ts')
  if (existsSync(indexFile)) {
    appendFileSync(indexFile, createIndexLargeComponent(folderName))
  }
}