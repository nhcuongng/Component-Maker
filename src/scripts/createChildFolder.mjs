import { mkdirSync, writeFileSync } from 'fs';
import ora from 'ora';
import { createIndexChildContent, createScssContent } from '../createFileContent/index.mjs';

export const createChildFolder = (folderDirectory, folderName) => {
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
    `${folderDirectory}/index.tsx`,
    createIndexChildContent(folderName)
  )

  writeFileSync(
    `${folderDirectory}/${folderName}.module.scss`,
    createScssContent(folderName)
  )

  spinner.succeed(`${folderName} created successfully!`);
}