import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const API_KEY = 'q8pcPASKm5fYWreOQ8KmcuvaYHBWd5ug';
  const SEARCH_URL = 'https://api.giphy.com/v1/gifs/search?';

  const transformQuery = (query) => query.split(' ').join('+');

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(SEARCH_URL);
  }, []);

  const getGifs = async (endpoint) => {
    const url = await fetch(
      `${endpoint}api_key=${API_KEY}&q=${transformQuery(
        category
      )}&limit=10`
    );

    const { data } = await url.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
    setImages(gifs);
  };

  return (
    <>
      <h3> {category} </h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
