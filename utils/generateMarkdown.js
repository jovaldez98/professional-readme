// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github license](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  } else {
    return ``;
  }
}


// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description

  ${data.description}

  ## Table OF CONTENTS
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## INSTALLATION

  ${data.installation}

  ## USAGE
    
  ${data.usage}

  ## CREDITS

  ${data.credits}

  ## LICENSE

  This project is license under ${data.license}

  ## TESTS
    
  ${data.tests}
  
  ## QUESTIONS
  
  If you have any questions about this project, please contact me directly ${data.email}. Other of my projects are visible at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
