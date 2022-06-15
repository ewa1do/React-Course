import React, { useState } from 'react';

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory;
