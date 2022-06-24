import React from 'react';
import useForm from '../../hooks/useForm';

const SearchScreen = () => {
  const [formValues, handleInputChange, reset] = useForm({
    searchText: '',
  });

  const { searchText } = formValues;

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
      </div>
    </>
  );
};

export default SearchScreen;
