import { mkdirSync, writeFileSync } from 'fs';
import ora from 'ora';
import { createIndexFileComponent, createScssContent } from '../createFileContent/index.mjs';

export const createComponent = (folderDirectory, folderName) => {
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
    createIndexFileComponent(folderName)
  )

  writeFileSync(
    `${folderDirectory}/${folderName}.module.scss`,
    createScssContent(folderName)
  )

  spinner.succeed(`${folderName} component created successfully!`);
}