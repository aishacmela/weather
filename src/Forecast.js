import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row mt-4">
        <div className="col">
            <div className="forecast-day">Wed</div>
            <div className="forecast-icon">
            <WeatherIcon code="01d" size={50} />
            </div>
            <div className="forecast-temperatures">
                <span className="max-temperature">20</span>
                <span className="min-temperature"> 8</span> 
            </div> 
        </div>
      </div>
    </div>
  );
}
