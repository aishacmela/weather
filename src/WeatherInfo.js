import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props){
    return(
       <div className="WeatherInfo">
        <div className="row mt-5">
        <div className="col-sm-4 text-center">
          <h2 className="text-capitalize">{props.data.city}</h2>
          <FormattedDate date={props.data.date} />
          <p>{props.data.description}</p>
        </div>
        <div className="col-sm-4 text-center">
          <WeatherIcon code={props.data.icon} />
        </div>

        <div className="col-sm-4 text-center">
          <ul>
            <li>
              Pressure : <strong>{props.data.pressure}</strong>
            </li>
            <li>
              Humidity : <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind : <strong> {props.data.wind}km/h</strong>
            </li>
          </ul>
          <div className="citytemperature">
            <span className="temperature">{Math.round(props.data.temperature)}</span>
            <span className="unit">°C | F</span>
          </div>
        </div>
      </div>
    </div>
    
  );

}
