import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
    const codeMapping = {
        "01d" : "CLEAR_DAY",
        "01n" : "CLEAR_NIGHT",
        "02d" : 'PARTLY_CLOUDY_DAY',
        "02n" : 'PARTLY_CLOUDY_NIGHT',
        "03d" : 'PARTLY_CLOUDY_DAY',
        "03n" : 'PARTLY_CLOUDY_NIGHT',
        "04n" : 'CLOUDY',
        "04d" : 'CLOUDY',
        "09n" : 'RAIN',
        "09d" : 'RAIN',
        "10n" : 'RAIN',
        "10d" : 'RAIN',
        "11n" : 'RAIN',
        "11d" : 'RAIN',
        "13n" : 'SNOW',
        "13d" : 'SNOW',
        "50d" : 'FOG',
        "50n" : 'FOG'      
    }
    return (
      <ReactAnimatedWeather
        icon= {codeMapping[props.code]}
        color= "black"
        size= {props.size}
        animate= {true}
      />
    );
}