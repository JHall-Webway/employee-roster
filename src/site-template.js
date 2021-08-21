const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const buildSite = (employees) => {
    let htmlRoster = [];
    employees.map(employee => {
        switch (employee.role) {
            case 'Manager':
                let managerObj = new Manager(employee);
                let managerHtml = ``;
                htmlRoster.push(managerHtml);
                break;
            case 'Engineer':
                let engineerObj = new Engineer(employee);
                let engineerHtml = ``;
                htmlRoster.push(engineerHtml);
                break;
            case 'Intern':
                let internObj = new Intern(employee);
                let internHtml = ``;
                htmlRoster.push(internHtml);
                break;
            default:
                throw ('ERROR: Format not accepted for site generation.');
        };
    });
    console.log(htmlRoster);
};

module.exports = buildSite;