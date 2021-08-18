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
        return `Employee name: ${this.name}`;
    };

    getId() {
        return `Employee ID: ${this.id}`;
    };

    getEmail() {
        return `Employee Email: ${this.email}`
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;