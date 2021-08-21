const inquirer = require('inquirer');
const buildSite = require('./src/site-template')

employeeInput = employeeArr => {
    if (!employeeArr) {
        employeeArr = [];
    }
    console.log(`
    ============
    New Employee
    ============
    `);
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
        },
        {
            type: 'number',
            name: 'office',
            message: "What is the manager's office number?",
            when: ({ role }) => {
                if (role === 'Manager') {
                    return true
                }
                return false;
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub?",
            when: ({ role }) => {
                if (role === 'Engineer') {
                    return true
                }
                return false;
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: ({ role }) => {
                if (role === 'Intern') {
                    return true
                }
                return false;
            },
        },
        {
            type: 'confirm',
            name: 'newEmployeeConfirm',
            message: 'Do you want to add another employee?',
            default: true
        }
    ]).then(ans => {
        employeeArr.push(ans);
        if (ans.newEmployeeConfirm) {
            return employeeInput(employeeArr);
        } return employeeArr;
    });
};

employeeInput()
    .then(ans => buildSite(ans));
