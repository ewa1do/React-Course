// * con el hook useParams tenemos acceso a los parametros de una url
// * el Navigate cambia la ubicacion de la pagina
import { useParams, Navigate } from 'react-router-dom';
import getHeroById from '../../helpers/getHeroById';

const HeroScreen = () => {
  const { heroeId } = useParams();

  const hero = getHeroById(heroeId);

  if (!hero) {
    return <Navigate to='/' />;
  }

  return (
    <div>
      <h1>HeroScreen</h1>

      <p>{hero.superhero}</p>
    </div>
  );
};

export default HeroScreen;
