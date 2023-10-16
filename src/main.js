import getWeather from "./weather-api";
import "./style.css"
import getGiph from "./giphy-api";


const locationInput = document.getElementById('location');
const getButton = document.getElementById('get')

getButton.addEventListener('click', ()=>{
    async function displayGiph(){
        let weatherCondition = await getWeather(locationInput.value)
        let imageUrl = await getGiph(weatherCondition);
        document.querySelector("img").src = imageUrl
    }
    displayGiph()
})
