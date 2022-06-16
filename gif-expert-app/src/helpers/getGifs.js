const API_KEY = 'q8pcPASKm5fYWreOQ8KmcuvaYHBWd5ug';
const SEARCH_URL = 'https://api.giphy.com/v1/gifs/search?';

export const getGifs = async (category) => {
  const url = await fetch(
    `${SEARCH_URL}api_key=${API_KEY}&q=${encodeURI(
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

  return gifs;
};
