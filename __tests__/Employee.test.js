const Employee = require('../lib/Employee');

const testObj = {
    name: 'Dave',
    email: 'test@email.com',
    role: 'Engineer'
}

test('creates an Employee object', () => {
    const employee = new Employee(testObj);
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('test@email.com');
});

test("Retrieves Employee's name", () => {
    const employee = new Employee(testObj);
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("Retrieves Employee's ID", () => {
    const employee = new Employee(testObj);
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("Retrieves Employee's Email", () => {
    const employee = new Employee(testObj);
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("Retrieves Employee's Role", () => {
    const employee = new Employee(testObj);
    expect(employee.getRole()).toBe(employee.role);
});


