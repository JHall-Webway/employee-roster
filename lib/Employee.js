class Employee {
    constructor(input) {
        let employeeCount = 1;
        this.name = input.name;
        this.id = employeeCount;
        employeeCount++;
        this.email = input.email;
        this.role = input.role;
    };

    getName() {
        return `${this.name}`;
    };

    getId() {
        return `${this.id}`;
    };

    getEmail() {
        return `${this.email}`
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;