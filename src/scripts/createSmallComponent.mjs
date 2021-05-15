import { mkdirSync, writeFileSync } from 'fs';
import ora from 'ora';
import { createIndexSmallComponent, createScssContent } from '../createFileContent/index.mjs';

export const createSmallComponent = (folderDirectory, folderName) => {
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
    createIndexSmallComponent(folderName)
  )

  writeFileSync(
    `${folderDirectory}/${folderName}.module.scss`,
    createScssContent(folderName)
  )

  spinner.succeed(`${folderName} created successfully!`);
}