#!/usr/bin/env node
import chalk from 'chalk';
// import { appendFileSync } from 'fs';

import {
  setup,
  createParentFolder,
  createChildFolder,
  setupChildFolder,
} from './scripts/index.mjs';

import { name, ComponentType } from './constant.mjs';
// import { createIndexFile } from './createFileContent/index.mjs';

(async () => {

  console.log(`\n${chalk.magentaBright(name)}`);

  try {
    const {
      folderDirectory,
      folderType,
    } = await setup();

    const cwd = process.cwd();
    const absFolderDirectory = `${cwd}/${folderDirectory}`;
    console.log(absFolderDirectory, 'current')

    const folderName = folderDirectory.split('/').slice(-1)[0];

    if (folderType === ComponentType.small) {
      createChildFolder(absFolderDirectory, folderName);
      // appendFileSync(`../${absFolderDirectory}/index.ts`, createIndexFile(folderName))
      return;
    }

    const { childFolderName } = await setupChildFolder()
    const childAbsfolderDirectory = `${absFolderDirectory}/${childFolderName}`;
    createParentFolder(absFolderDirectory, childFolderName);
    createChildFolder(childAbsfolderDirectory, childFolderName);

  } catch (error) {
    console.error(error.message);
  }
})()