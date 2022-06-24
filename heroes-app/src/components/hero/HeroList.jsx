import { useMemo } from 'react';

import HeroCard from './HeroCard';
import getHeroesByPublisher from '../../helpers/getHeroesByPublisher';

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => {
    return getHeroesByPublisher(publisher);
  }, [publisher]);

  return (
    <div className='row animate__animated animate__fadeIn'>
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
