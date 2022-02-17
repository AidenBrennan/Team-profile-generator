const intern = require('../lib/intern')

test('test intern', () => {
    const testintern = new intern('Aiden', 2, 'aiden.c.b@hotmail.com', 'Harvard');

    expect(testintern.name).toBe('Aiden');
    expect(testintern.id).toBe(2);
    expect(testintern.email).toBe('aiden.c.b@hotmail.com');
    expect(testintern.school).toBe('Harvard');
})