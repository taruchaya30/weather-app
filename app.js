
let input=document.querySelector(".inputbox");
let button=document.querySelector("#btn");
let img=document.querySelector(".image");
let temperature=document.querySelector(".temp");
let des=document.querySelector(".description");
let humi=document.querySelector("#one");
let wind=document.querySelector("#speed");
let heading =document.getElementsByName("h1");


async function checkweather(city){
    const apikey = "9a90695c72c1416d6dfea3e9eb7daec2";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

const weather = await fetch (`${URL}`).then (response => response.json());
console.log(weather);

temperature.innerHTML= `${Math.round(weather.main.temp-273.15)}°C`; /*temp-273.15 is used to convert the temperature from fehrenhiet to celcius and main.temp means tat the temperature value is present in main of the cosnole windoe of the brower on printintg the weather*/

des.innerHTML = `${weather.weather[0].description}`;
humi.innerHTML= `${weather.main.humidity}%`;
wind.innerHTML= `${weather.wind.speed}km/h`;

if (`${weather.weather[0].main}`==="Clear"){
  img.src="sun.png";}

else if(`${weather.weather[0].main}`=== "Clouds"){
    img.src="weathersymbolpng.png";}

else if(`${weather.weather[0].main}`==="Rain"){
   img.src= "rainy.jpg";}
    
else if(`${weather.weather[0].main}`=== "Wind"){
    img.src="storm.png";}

    else if(`${weather.weather[0].main}`=== "Snow"){
        img.src="snow.png";}
    
    else if(`${weather.weather[0].main}`=== "Mist"){
        img.src="fog.webp";}
    
    else if(`${weather.weather[0].main}`=== "Haze"){
        img.src="haze.png";}

    
       
     else{
        img.src="weather.jpg";
     }

    }





button.addEventListener("click", ()=>{
checkweather(input.value);
});