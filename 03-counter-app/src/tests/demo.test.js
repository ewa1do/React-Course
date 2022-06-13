describe('Tests on demo.test.js', () => {
  test('The strings must be equals', () => {
    // 1. Inicializacion
    const message1 = 'Hello World';

    // 2. Estimulo
    const message2 = `Hello World`;

    // 3. Observar el comportamiento
    expect(message1).toBe(message2);
  });
});
