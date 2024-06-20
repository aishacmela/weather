import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDataDay from "./ForecastDataDay";

export default function Forecast(props) {
    const [forecastData, setForecastData] = useState([]);
    const [loaded, setLoaded] = useState(false)

    
   

    function searchForecast(){
      let apiKey = `6e6ec494746b5229a9f2d526478c924c`;
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);

    } 
    
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
            </div>
            );  
        } else {
          return null
        }
           
  })}
        </div>
       </div>
       
     );
  } else {
  searchForecast();
  return "Loading forecast data";
  }
   
}







