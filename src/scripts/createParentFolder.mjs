import { mkdirSync, writeFileSync } from 'fs';
import ora from 'ora';
import { createIndexFile } from '../createFileContent/index.mjs';

export const createParentFolder = (folderDirectory, childFolderName) => {
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
    createIndexFile(childFolderName)
  )

  spinner.succeed(`${childFolderName} created successfully!`);

}