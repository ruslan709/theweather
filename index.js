const apiKey = "e9c0a8d29a2be036480737aac624d413";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon1 = document.querySelector(".weather-icon1");
const weatherIcon2 = document.querySelector(".weather-icon2");
const weatherIcon3 = document.querySelector(".weather-icon3");
const weatherIcon4 = document.querySelector(".weather-icon4");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";


    } else {
        var data = await response.json();


        console.log(data);


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "m/c";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
            weatherIcon1.src = "images/4.png";
            weatherIcon2.src = "images/7.png";
            weatherIcon3.src = "images/11.png";
            weatherIcon4.src = "images/12.png";
            






        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
            weatherIcon1.src = "images/8.png";
            weatherIcon2.src= "images/9.png";
            weatherIcon3.src="images/13.png";








        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
            weatherIcon1.src="images/10.png";
           


        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";


        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";

        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }


}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


















/*
let clothesIcon = document.querySelector(".clothes-icon")
if (data.weather[0].main== "Clouds"){
    clothesIcon.src= "images/msg651667724-96521.jpg";
}else (data.weather[0].main== "Clear")
{
    clothesIcon.src= "images/north.jpg";
}

*/











