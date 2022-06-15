import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExperApp = () => {
  const [categories, setCategories] = useState(['Berserk']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />

      <hr />

      <h3>Categories</h3>
      <ul>
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
      </ul>
    </>
  );
};

export default GifExperApp;
