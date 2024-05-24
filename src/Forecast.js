import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDataDay from "./ForecastDataDay";

export default function Forecast(props) {
    const [forecastData, setForecastData] = useState("");
    const [loaded, setLoaded] = useState(false)
    
    function handleResponse(response){
      setLoaded(true);
      setForecastData(response.data.daily); 
      console.log(response.data.daily[0].weather[0].icon);
    }
  
  if(loaded){
     return (
       <div className="forecast">
        
         <ForecastDataDay data={forecastData[0]}/>
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
