import React, { useState } from 'react';

const GifExperApp = () => {
  // const categories = ['Hunter X Hunter', 'Berserk', 'Slam Dunk'];

  const [categories, setCategories] = useState([
    'Hunter X Hunter',
    'Berserk',
    'Slam Dunk',
  ]);

  console.log(categories);

  const addCategorie = () => {
    // setCategories(categories.concat(['Naruto']));
    // setCategories([...categories, 'Naruto']);
    setCategories(cats => [...cats, 'Naruto']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={addCategorie}>Add</button>
      <h3>Categories</h3>
      <ul>
        {categories.map(cat => {
          return <li>{cat}</li>;
        })}
      </ul>
    </>
  );
};

export default GifExperApp;
