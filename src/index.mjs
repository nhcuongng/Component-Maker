#!/usr/bin/env node
import chalk from 'chalk';

import {
  setup,
  createLargeComponent,
  createSmallComponent,
  setupSmallComponent,
  appendExportTheEndOfFile
} from './scripts/index.mjs';

import { name, ComponentType } from './constant.mjs';

(async () => {

  console.log(`\n${chalk.magentaBright(name)} - by Mason Nguyen 🦸‍♂️`);

  try {
    const {
      folderDirectory,
      componentType,
    } = await setup();

    // Get current working dir and file name
    const cwd = process.cwd();
    const absFolderDirectory = `${cwd}/${folderDirectory}`;
    const componentName = folderDirectory.split('/').slice(-1)[0];

    if (componentType === ComponentType.small) {
      // Create child component
      createSmallComponent(absFolderDirectory, componentName);
      // Write 'export component' child to index.ts
      appendExportTheEndOfFile(absFolderDirectory, componentName);
      return;
    }

    // Fill name child component
    const { smallComponentName } = await setupSmallComponent()
    const childAbsfolderDirectory = `${absFolderDirectory}/${smallComponentName}`;
    // create large component
    createLargeComponent(absFolderDirectory, smallComponentName);
    // create child (small) component
    createSmallComponent(childAbsfolderDirectory, smallComponentName);

  } catch (error) {
    console.error(error.message);
  }
})()