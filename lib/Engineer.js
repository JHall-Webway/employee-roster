const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(input) {
        super(input);
        this.github = input.github;
    };

    getGithub() {
        return `github.com/${this.github}`
    };
};

module.exports = Engineer;