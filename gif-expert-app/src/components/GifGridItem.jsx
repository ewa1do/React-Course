import React from 'react';

const GifGridItem = ({ title, url }) => {
  return (
    <figure className="card">
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
};

export default GifGridItem;
