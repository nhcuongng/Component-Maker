import inquirer from 'inquirer';
// import { validateName } from '../validates.mjs';
import { ComponentType } from '../constant.mjs';

const questions = [
    {
        type: 'input',
        name: 'folderDirectory',
        message: 'Directory to new Component (includes component name):',
        default: 'src/components/NewComponet',
        // validate: validateName,
    },
    {
        type: 'list',
        name: 'componentType',
        message: 'What type of Component want?:',
        choices: [ComponentType.small, ComponentType.large],
    },
];

export const setup = async () => await inquirer.prompt(questions);
