const engineer = require('../lib/engineer')

test('test engineer', () => {
    const testengineer = new engineer('Aiden', 2, 'aiden.c.b@hotmail.com','infamous22222','Backend optimisation' );

    expect(testengineer.name).toBe('Aiden');
    expect(testengineer.id).toBe(2);
    expect(testengineer.email).toBe('aiden.c.b@hotmail.com');
    expect(testengineer.github).toBe('infamous22222');
    expect(testengineer.currentproject).toBe('Backend optimisation');
})