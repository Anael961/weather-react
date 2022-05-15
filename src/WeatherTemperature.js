import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="maintemp">{Math.round(props.celsius)}</span>
        <span className="tempunits">
          °C |{" "}
          <a href="/" title="Convert to Fahrenheit" onClick={showFahrenheit}>
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="maintemp">{Math.round(fahrenheit())}</span>
        <span className="tempunits">
          <a href="/" title="Convert to Celsius" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F{" "}
        </span>
      </div>
    );
  }
}
