const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(input) {
        super(input);
        this.github = input.github;
    };

    getGithub() {
        return `Github Link: github.com/${this.github}`
    };
};

module.exports = Engineer;