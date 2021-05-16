import inquirer from 'inquirer';
// import { validateName } from '../validates.mjs';
import { _DEFAULT } from '../constant.mjs';


const questions = [
    {
        type: 'input',
        name: 'componentName',
        message: 'Your child component name:',
        default: 'ChildComponent',
        // validate: validateName,
    },
];

export const setupComponent = async () => await inquirer.prompt(questions);
