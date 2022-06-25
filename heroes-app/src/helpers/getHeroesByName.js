import { heroes } from '../data/heroes';

const getHeroesByName = (name = '') => {
  if (name.length === 0) return [];

  name = name.toLowerCase();

  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name)
  );
};

export default getHeroesByName;
