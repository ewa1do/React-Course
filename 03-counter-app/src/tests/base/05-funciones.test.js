import { getUser, getUsuarioActivo } from '../../base/05-funciones';
import '@testing-library/jest-dom';

describe('Test on 05-funciones', () => {
  test('Must return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    console.log(user);

    expect(user).toEqual(userTest);
  });

  // getUsuarioActivo debe retornar un objeto
  test('getUsuarioActivo must return an object', () => {
    const nombre = 'Eduardo';

    const userActive = getUsuarioActivo(nombre);

    expect(userActive).toStrictEqual({
      uid: 'ABC567',
      username: nombre,
    });
  });
});
