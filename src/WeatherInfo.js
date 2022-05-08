import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row temperature-today">
        <div className="col-6">
          <span className="maintemp">{Math.round(props.data.temperature)}</span>
          <span className="tempunits">
            <a href="/">°C </a> | <a href="/">°F </a>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
      <div className="mb-5">
        <WeatherIcon code={props.data.icon} />
      </div>
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>
      <div className="row todays-highlights">
        <div className="text-capitalize weather-description">
          {props.data.description}
        </div>
      </div>
      <hr />
      <div className="row forecast">
        <div className="col">
          Mon
          <br />
          ⛅
          <br />
          4°C
        </div>
        <div className="col">
          Tue
          <br />
          ⛅
          <br />
          0°C
        </div>
        <div className="col">
          Wed
          <br />
          ⛅
          <br />
          2°C
        </div>
        <div className="col">
          Thu
          <br />
          🌨️
          <br />
          1°C
        </div>
        <div className="col">
          Fri
          <br />
          🌦️
          <br />
          3°C
        </div>
        <div className="col">
          Sat
          <br />
          🌨️
          <br />
          7°C
        </div>
      </div>
    </div>
  );
}
