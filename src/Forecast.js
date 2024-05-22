import React from "react";
import "./Forecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div>Sat</div>
      <div className="weatherforecast-icon">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt=""
          width={80}
        />
      </div>
      <div className="Weatherforecast-Temperature">
        <span className="weatherforecast-max">29</span>
        <span className="weatherforecast-min">18</span>
      </div>
    </div>
  );
}
