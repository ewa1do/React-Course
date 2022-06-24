// * con el hook useParams tenemos acceso a los parametros de una url
// * el Navigate cambia la ubicacion de la pagina
import {
  useParams,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import getHeroById from '../../helpers/getHeroById';

const HeroScreen = () => {
  const { heroeId } = useParams();
  const hero = getHeroById(heroeId);

  const navigate = useNavigate();

  const handleReturn = () => {
    // const publisherScren =
    //   '/' + publisher.split(' ')[0].toLowerCase();

    // navigate(publisherScren);

    navigate(-1); // * -1 === pantalla anterior
  };

  if (!hero) {
    return <Navigate to='/' />;
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const imagePath = `/src/assets/${id}.jpg`;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={imagePath}
          alt={superhero}
          className='img-thumbnail'
        />
      </div>

      <div className='col-8'>
        <h3> {superhero} </h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <strong>Alter Ego: </strong> {alter_ego}
          </li>
          <li className='list-group-item'>
            <strong>Publisher: </strong> {publisher}
          </li>
          <li className='list-group-item'>
            <strong>First Appearance: </strong>{' '}
            {first_appearance}
          </li>
        </ul>

        <h5 className='mt-5'>Characters</h5>
        <p>{characters}</p>

        <button
          className='btn btn-info'
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
