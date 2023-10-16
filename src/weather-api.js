export default async function getWeather(location){
    let passedLocation = location;
    const apiKey = 'ae8802e5013f4a1a89e02807230810'
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${passedLocation}`
    const response = await fetch(url, {mode: 'cors'});
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.current.condition.text;
}

