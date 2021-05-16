#!/usr/bin/env node
import chalk from 'chalk';

import {
  setup,
  createFolderWrapper,
  createComponent,
  setupComponent,
  appendExportTheEndOfFile
} from './scripts/index.mjs';

import { name, _CHOICES } from './constant.mjs';

(async () => {

  console.log(`\n${chalk.magentaBright(name)} - by Mason Nguyen 🦸‍♂️`);

  try {
    const {
      folderDirectory,
      choiceType,
    } = await setup();

    // Get current working dir and file name
    const cwd = process.cwd();
    const absFolderDirectory = `${cwd}/${folderDirectory}`;
    const componentName = folderDirectory.split('/').slice(-1)[0];

    if (choiceType === _CHOICES.component) {
      // Create child component
      createComponent(absFolderDirectory, componentName);
      // Write 'export component' child to index.ts
      appendExportTheEndOfFile(absFolderDirectory, componentName);
      return;
    }

    // Fill name child component
    const { componentName: childComponentName } = await setupComponent()
    const childAbsfolderDirectory = `${absFolderDirectory}/${childComponentName}`;
    // create folderWrapper component
    createFolderWrapper(absFolderDirectory, childComponentName);
    // create child (small) component
    createComponent(childAbsfolderDirectory, childComponentName);

  } catch (error) {
    console.error(error.message);
  }
})()