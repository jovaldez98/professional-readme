// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
       type: 'input',
       name: 'github',
       message: 'What is your Github username?'
    },
    {
       type: 'input',
       name: 'email',
       message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name if your app?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your app:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your app?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage of your app:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators if any, with links to their Github profiles:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does this repo have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command did you use to run tests?'
    }
];


// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);

            fs.writeFile('dist/README.md', generateMarkdown(answers), err => {
                if (err) return console.error(err);

                console.log('README generated successfully...');
            })
            console.log(generateMarkdown(answers));
        });
}


// Function call to initialize app
init();
