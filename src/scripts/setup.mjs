import inquirer from 'inquirer';
import { validateName } from '../validates.mjs';
import { ComponentType } from '../constant.mjs';

const questions = [
    {
        type: 'input',
        name: 'folderDirectory',
        message: 'Your Component Name:',
        default: 'NewComponent',
        // validate: validateName,
    },
    {
        type: 'list',
        name: 'folderType',
        message: 'What type of Component want?:',
        choices: [ComponentType.small, ComponentType.large],
    },
];

export const setup = async () => await inquirer.prompt(questions);
