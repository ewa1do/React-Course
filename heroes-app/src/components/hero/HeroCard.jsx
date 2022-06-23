import { Link } from 'react-router-dom';

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `/src/assets/${id}.jpg`;

  return (
    <div className='col-2'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-8'>
            <img
              src={imagePath}
              className='card-img'
              alt={superhero}
            />
          </div>
          <div className='mb-3'>
            <h5 className='card-title'>{superhero}</h5>
            <p className='card-text'>{alter_ego}</p>

            {alter_ego !== characters && (
              <p className='text-muted'>{characters}</p>
            )}

            <p className='card-text'>
              <small className='text-muted'>
                {first_appearance}
              </small>
            </p>

            <Link to={`/hero/${id}`}>Mas...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
