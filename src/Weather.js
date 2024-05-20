import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({});
    const [ready, setReady] = useState(false);
 

  function handleResponse(response){
  setWeatherData({
    date: new Date(response.data.dt * 1000),
    city: response.data.city,  
    temperature: response.data.main.temp,
    pressure: response.data.main.pressure,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: response.data.weather[0].description
  });
    setReady(true);
    console.log(response.data); 
  }


    if(ready){
return (
    <div className="weather">
      <form >
        <input
          type="search"
          placeholder="Enter city"
          autoFocus="on"
          className="search-form col-8 "
          
        />
        <input 
          type="submit" 
          value="search" 
          className="submit-form col-3" />
      </form>
      <WeatherInfo data={weatherData}/>
      </div>
      );
    } else {
        
    const apiKey = `480d20dfa70092c931000b6330ebfc1e`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
    }

  
}
