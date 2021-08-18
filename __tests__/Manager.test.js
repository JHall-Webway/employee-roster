const Manager = require('../lib/Manager');

const testObj = {
    name: 'Dave',
    email: 'test@email.com',
    role: 'Manager',
    office: 3
};

test('creates a Manager object', () => {
    const manager = new Manager(testObj);
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('test@email.com');
    expect(manager.office).toEqual(expect.any(Number));
});

test("Retrieves Manager's Role", () => {
    const manager = new Manager(testObj);
    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role));
});