import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDataDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return days[day];
  }

  return (
    <div className="Forecast-data-day">
          <div className="forecast-day">{day()}</div>
          <div className="forecast-icon">
            <WeatherIcon code={props.data.weather[0].icon} size={50} />
          </div>
          <div className="forecast-temperatures">
            <span className="max-temperature">{minTemperature()}</span>
            <span className="min-temperature">{maxTemperature()}</span>
          </div>
        </div>
  );
}
