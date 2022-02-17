const Manager = require('../lib/manager')

test('test manager', () => {
    const testmanager = new Manager('Aiden', 2, 'aiden.c.b@hotmail.com',8, 'HR');

    expect(testmanager.name).toBe('Aiden');
    expect(testmanager.id).toBe(2);
    expect(testmanager.email).toBe('aiden.c.b@hotmail.com');
    expect(testmanager.officeNumber).toBe(8);
    expect(testmanager.title).toBe('HR');

})