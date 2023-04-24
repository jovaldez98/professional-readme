// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'description',
    message: 'Tell us about your project'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        fs.writeFile('dist/README.md', generateMarkdown(answers), err => {
            if (err) return console.error(err);

            console.log('README generated successfully...');
        })
        console.log(generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
