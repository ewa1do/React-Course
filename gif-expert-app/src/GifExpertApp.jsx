import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExperApp = () => {
  const [categories, setCategories] = useState([
    'Hunter X Hunter',
    'Berserk',
    'Slam Dunk',
  ]);

  // const addCategorie = () => {
  //   // setCategories(categories.concat(['Naruto']));
  //   // setCategories([...categories, 'Naruto']);
  //   setCategories(cats => [...cats, 'Naruto']);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />

      <hr />

      <h3>Categories</h3>
      <ul>
        {categories.map((cat) => {
          return <li key={cat}>{cat}</li>;
        })}
      </ul>
    </>
  );
};

export default GifExperApp;
