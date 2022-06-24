import { heroes } from '../data/heroes';

const getHeroesByName = (name = '') => {
  // name = name.toLowerCase();
  // return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

  return heroes;
};

export default getHeroesByName;
