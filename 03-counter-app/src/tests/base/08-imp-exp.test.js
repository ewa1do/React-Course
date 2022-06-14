import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Tests on hero functions', () => {
  test('should return a hero by id', () => {
    const id = 2;
    const hero = getHeroeById(id);

    const heroesData = heroes.find((hero) => hero.id === id);

    expect(hero).toStrictEqual(heroesData);
  });

  test('should return undefined if hero does not exists', () => {
    const id = 10;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
  });

  // debe retornar un arreglo con los heroes de DC
  // owner
  // ToEqual al arreglo filtrado

  test('should return an array containing the DC heroes', () => {
    const dcHeroes = getHeroesByOwner('DC');

    const owner = heroes.filter(({ owner }) => owner === 'DC');

    expect(owner).toStrictEqual(dcHeroes);
  });

  // debe retornar un arreglo con los heroes de marvel
  // length = 2 //toBe

  test('should return an array containing marvel heroes', () => {
    const marvel = getHeroesByOwner('Marvel');

    expect(marvel.length).toBe(2);
  });
});
