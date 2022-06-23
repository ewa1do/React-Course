import getHeroesByPublisher from '../../helpers/getHeroesByPublisher';

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.superhero}</li>
        ))}
      </ul>
    </>
  );
};

export default HeroList;
