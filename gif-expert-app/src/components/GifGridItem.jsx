import React from 'react';

const GifGridItem = ({ title, url }) => {
  return (
    <figure>
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
};

export default GifGridItem;
