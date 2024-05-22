import React, { useState } from "react";
import "./Weather.css";

export default function CityTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahreinheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="citytemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|
          <a href="/" onClick={convertToFahreinheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="citytemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
