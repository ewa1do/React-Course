import React from 'react';
import getHeroesByName from '../../helpers/getHeroesByName';
import useForm from '../../hooks/useForm';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {
  const [formValues, handleInputChange, reset] = useForm({
    searchText: '',
  });

  const { searchText } = formValues;

  const heroesFiltered = getHeroesByName('Algo por aqui');

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(searchText);

    reset();
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='find a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type='submit'
              className='btn btn-outline-primary mt-2 btn-block'
            >
              search...
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />

          {heroesFiltered.map((hero) => {
            return (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
