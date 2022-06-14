import { retornaArreglo } from '../../base/07-deses-arr';

describe('Tests on 07-deses-arr.js', () => {
  test('Must return a string and a number', () => {
    // const arr = retornaArreglo();
    // expect(arr).toEqual(['ABC', 123]);

    const [letras, numeros] = retornaArreglo(); //['ABC', 123]

    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');

    expect(typeof numeros).toBe('number');
    expect(numeros).toBe(123);
  });
});
