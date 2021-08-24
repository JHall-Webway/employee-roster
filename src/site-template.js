
const fs = require('fs');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const buildEmployees = (employees) => {
    let htmlRoster = [];
    employees.map(employee => {
        switch (employee.role) {
            case 'Manager':
                let manager = new Manager(employee);
                let managerHtml = `<div class="card mb-3" style="width: 100%;">
    <div class="card-body">
        <h5 class="card-title">${employee.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <p class="card-text">ID#: ${this.id}</p>
        <p class="card-text">EMail: ${this.email}</p>
        <p class="card-text">Office #: ${this.office}</p>
    </div>
</div>`;
                htmlRoster.push(managerHtml);
                break;
            case 'Engineer':
                let engineer = new Engineer(employee);
                let engineerHtml = `<div class="card mb-3" style="width: 50%;">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <p class="card-text">ID#: ${this.id}</p>
                    <p class="card-text">EMail: ${this.email}</p>
                    <p class="card-text">GitHub: ${this.github}</p>
                </div>
            </div>`;
                htmlRoster.push(engineerHtml);
                break;
            case 'Intern':
                let intern = new Intern(employee);
                let internHtml = `<div class="card mb-3" style="width: 50%;">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <p class="card-text">ID#: ${this.id}</p>
                    <p class="card-text">EMail: ${this.email}</p>
                    <p class="card-text">School: ${this.school}</p>
                </div>
            </div>`;
                htmlRoster.push(internHtml);
                break;
            default:
                throw ('ERROR: Format not accepted for site generation.');
        };
    }).join('');
};


const buildSite = (employees) => {
    return `<!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    
    <body>
        <div class="container-fluid">
            <header class="row text-center bg-danger mb-3">
                <div class="col-12">
                    <h1>My Team</h1>
                </div>
            </header>
            <div class="row">
                ${buildEmployees()}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`;
}

const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', buildSite(), err => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
};
module.exports = writeFile;