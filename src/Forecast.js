import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDataDay from "./ForecastDataDay";
import { cleanup } from "@testing-library/react";

export default function Forecast(props) {
    const [forecastData, setForecastData] = useState("");
    const [loaded, setLoaded] = useState(false)

    useEffect (() => {
     //set loaded to false 
     setLoaded(false);
    }, [props.coordinates]);
    //if the cordinates changes 
    
    function handleResponse(response){
      setLoaded(true);
      setForecastData(response.data.daily); 
      console.log(response.data.daily[0].weather[0].icon);
    }
  
  if(loaded){
     return (
       <div className="forecast">
         <div className="row mt-4">
        {forecastData.map((dailyForecast, index) => {
            if (index < 6){
            return ( 
            <div className="col" key={index}>
              <ForecastDataDay data={dailyForecast} />
            </div>);  
            }
           
  })}
        </div>
       </div>
       
     );
  } else {
  let apiKey = `ad793a6d772939c31783de5822791acf`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return "Loading forecast data";
  }
   
}







