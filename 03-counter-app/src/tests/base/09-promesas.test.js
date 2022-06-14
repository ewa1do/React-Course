import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Tests on Promises', () => {
  test('getHeroeByIdAsync should return an async hero', (done) => {
    const id = 1;

    // console.log(heroes);

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[0]);

      done();
    });
  });

  test('should have an error if the hero passed by id doesnt exists', (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
