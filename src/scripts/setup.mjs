import inquirer from 'inquirer';
// import { validateName } from '../validates.mjs';
import { _CHOICES, _DEFAULT } from '../constant.mjs';

const questions = [
    {
        type: 'list',
        name: 'choiceType',
        message: 'What type of Component want?:',
        choices: [_CHOICES.component, _CHOICES.folderWrapper],
    },
    {
        type: 'input',
        name: 'folderDirectory',
        message: 'Directory to new Component (includes component name):',
        default: _DEFAULT.dir,
        // validate: validateName,
    }
];

export const setup = async () => await inquirer.prompt(questions);
