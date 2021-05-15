import inquirer from 'inquirer';
import { validateName } from '../validates.mjs';

const questions = [
    {
        type: 'input',
        name: 'smallComponentName',
        message: 'Your child component name:',
        default: 'NewComponent',
        // validate: validateName,
    },
];

export const setupSmallComponent = async () => await inquirer.prompt(questions);
