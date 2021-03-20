export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ier6vVkpbae80PyqykHNMGwxhNwBtNSY&q=${ encodeURI(category) }&limit=5`;
    // encodeURI quita espacios para mejorar la peticion a la API
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized.url
        }
    });
    return gifs
        // setImages(gifs);
}