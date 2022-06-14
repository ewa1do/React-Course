export const getImagen = async () => {
  try {
    const apiKey = '0VdSaUUXeFr807QLyqz95kFVrGtjoaHP';
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append( img );
    return url;
  } catch (error) {
    // manejo del error
    // console.error(error);
    return 'No existe';
  }
};
