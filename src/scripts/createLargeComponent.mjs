import { mkdirSync, writeFileSync } from 'fs';
import ora from 'ora';
import { createIndexLargeComponent } from '../createFileContent/index.mjs';

export const createLargeComponent = (folderDirectory, componentName) => {
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
    createIndexLargeComponent(componentName)
  )

  spinner.succeed(`${componentName} created successfully!`);

}