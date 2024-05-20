import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({});
    const [ready, setReady] = useState(false);
 

  function handleResponse(response){
  setWeatherData({
    date: new Date(response.data.dt * 1000),  
    temperature: response.data.main.temp,
    pressure: response.data.main.pressure,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
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

      <div className="row mt-5">
        <div className="col-sm-4 text-center">
          <h2 className="text-capitalize">{props.defaultCity}</h2>
          <FormattedDate date={weatherData.date} />
        </div>
        <div className="col-sm-4 text-center">
          <img
            src={weatherData.icon}
            alt=""
          />
        </div>

        <div className="col-sm-4 text-center">
          <ul>
            <li>
              Pressure : <strong>{weatherData.pressure}</strong>
            </li>
            <li>
              Humidity : <strong>{weatherData.humidity}%</strong>
            </li>
            <li>
              Wind : <strong> {weatherData.wind}km/h</strong>
            </li>
          </ul>
          <div className="citytemperature">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C | F</span>
          </div>
        </div>
      </div>
    </div>
  );
    } else {
        
    const apiKey = `480d20dfa70092c931000b6330ebfc1e`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
    }

  
}
