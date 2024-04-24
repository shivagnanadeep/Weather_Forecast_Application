const BASE_URL="http://api.weatherapi.com/v1/"; 
const searchButton=document.querySelector(".search-icon button");
const city=document.querySelector(".city");
const cityInput=document.querySelector(".city-input");
const temp=document.querySelector(".temp");
const weatherImage = document.querySelector(".weather-image img");
const weatherText=document.querySelector(".weather-image p");
const locationTime=document.querySelector(".location-time");
const wind=document.querySelector(".wind-speed");
const ppt = document.querySelector(".ppt");
const cloud=document.querySelector(".cloud");
const humidity=document.querySelector(".humidity");
const pressure=document.querySelector(".pressure");
const forecastCard1=document.querySelector(".ForeCast-card1");
const forecastCard2=document.querySelector(".ForeCast-card2");
const temp1=document.querySelector(".temp1");
const temp2=document.querySelector(".temp2");
const temp3=document.querySelector(".temp2");
let i=0;
let cityName=null;
searchButton.addEventListener("click",(event)=>{
    event.preventDefault();
    cityName=cityInput.value;
    getWeatherForecast(cityName,0);
});

const getWeatherForecast =async(cityName,i)=>{
    let URL = `${BASE_URL}forecast.json?key=f704c04ac58747ed9e073212242104&q=${cityName}&days=3&aqi=no&alerts=no`;
    let response=await fetch(URL);
    let data=await response.json();
    console.log(data);
    forecastCard1.style="display:block;";
    forecastCard2.style="border-top-left-radius:0rem;border-bottom-left-radius:0rem;"
    city.innerText=cityName;
    // console.log(data.current.feelslike_c);
    temp_in_c=data.current.feelslike_c;
    temp.innerText=temp_in_c+"℃";
    new_src=data.current.condition.icon;
    weatherImage.src=new_src;
    weatherText.innerText=data.current.condition.text;
    locationTime.innerText=data.location.localtime;
    wind.innerText=data.current.wind_kph+" kph ";
    ppt.innerText=data.current.precip_mm;
    cloud.innerText=data.current.cloud;
    humidity.innerText=data.current.humidity;
    pressure.innerText=data.current.pressure_in;
}