import { getSaludo } from '../../base/02-template-string';
import '@testing-library/jest-dom';

describe('Test on 02-template-string.js', () => {
  test('getSaludo must returns Hola Eduardo!', () => {
    const name = 'Eduardo';

    const saludo = getSaludo(name);
    console.log(saludo);

    expect(saludo).toBe('Hola ' + name + '!');
  });

  // getSaludo must return Hola Carlos! si no hay argumento en nombre
  test('getSaludo must return <Hola Carlos!> if theres any argument provided', () => {
    const saludo = getSaludo();

    expect(saludo).toBe('Hola Carlos!');
  });
});
