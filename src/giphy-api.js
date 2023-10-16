export default async function getGiph(weather){
    let passedWeather = weather;
    let apiKey = '0ArvhIobtu2QVFbcIUj6hu222Xt7aR3Z';
    let url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${passedWeather}`;

    const response = await fetch(url, {mode: 'cors'})
    const content = await response.json()
    console.log(content)
    return content.data.images.original.url
}