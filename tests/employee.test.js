const Employee = require('../lib/employee')

test('test employee', () => {
    const testemployee = new Employee('Aiden', 2, 'aiden.c.b@hotmail.com');

    expect(testemployee.name).toEqual(expect.any(String));
    expect(testemployee.id).toEqual(expect.any(Number));
    expect(testemployee.email).toEqual(expect.any(String));
})