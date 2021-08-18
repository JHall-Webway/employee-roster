const inquirer = require('inquirer');

EmployeeInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Employee's name?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Employee's email?"
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the Employee's role here?",
            choices: [
                'Intern',
                'Engineer',
                'Manager'
            ]
        }
    ])
}

EmployeeInput().then(res => console.log(res));