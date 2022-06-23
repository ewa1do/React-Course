import HeroCard from './HeroCard';

import getHeroesByPublisher from '../../helpers/getHeroesByPublisher';

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className='row'>
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          {...hero}
        />
      ))}
    </div>
  );
};

export default HeroList;
