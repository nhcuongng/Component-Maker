import { mkdirSync, writeFileSync } from 'fs';
import ora from 'ora';
import { createIndexFolderWrapper } from '../createFileContent/index.mjs';

export const createFolderWrapper = (folderDirectory, componentName) => {
  const spinner = ora('Writing folder structure...').start();
  spinner.start();

  mkdirSync(
    folderDirectory,
      { recursive: true },
      (err) => {
        if (err) throw err;
      }
  );

  writeFileSync(
    `${folderDirectory}/index.ts`,
    createIndexFolderWrapper(componentName)
  )

  spinner.succeed(`Folder wrapper ${folderDirectory.split('/').slice(-1)[0]} created successfully!`);

}