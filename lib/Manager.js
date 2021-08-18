const Employee = require("./Employee");

class Manager extends Employee {
    constructor(input) {
        super(input);
        this.office = input.office;
    };
};

module.exports = Manager;