const Engineer = require('../lib/Engineer')
const testObj = {
    name: 'Dave',
    email: 'test@email.com',
    role: 'Engineer',
    github: 'DaveCompany'
};

test('creates a Engineer object', () => {
    const engineer = new Engineer(testObj);
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('test@email.com');
    expect(engineer.github).toEqual(expect.any(String));
});

test("Retrieves Engineer's Role", () => {
    const engineer = new Engineer(testObj);
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role));
});

test("Retrieves Engineer's Github", () => {
    const engineer = new Engineer(testObj);
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});