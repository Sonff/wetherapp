const inputbox = document.querySelector(' .input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const tempereture = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkweather(city){
    const api_key = "597b6729b9828d23f03442a6227ec984";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(Response => Response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        
        return;
    }

    console.log("run");
    
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    tempereture.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assest/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assest/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/assest/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/assest/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/assest/snow.png";
            break;
    }


    console.log(weather_data);
    
}
searchbtn.addEventListener('click',()=>{
    checkweather(inputbox.value);
});