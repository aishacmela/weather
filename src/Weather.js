import React, { useState, } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import { ThreeDots } from "react-loader-spinner";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);


  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,

    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  
  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `480d20dfa70092c931000b6330ebfc1e`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
 

  if (weatherData.ready) {
    return (
      <div className="weather shadow">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter city"
            autoFocus="on"
            className="search-form col-8"
            onChange={changeCity}
          />
          <input type="submit" value="Search" className="submit-form col-3" />
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <ThreeDots
          visible={true}
          height="160"
          width="160"
          color="black"
          radius="18"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}
