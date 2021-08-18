const Intern = require('../lib/Intern');

const testObj = {
    name: 'Dave',
    email: 'test@email.com',
    role: 'Intern',
    school: 'DaveSchool'
};

test('creates a Intern object', () => {
    const intern = new Intern(testObj);
    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('test@email.com');
    expect(intern.school).toBe('DaveSchool');
});

test("Retrieves Intern's Role", () => {
    const intern = new Intern(testObj);
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role));
});

test("Retrieves Intern's School", () => {
    const intern = new Intern(testObj);
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});