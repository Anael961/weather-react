import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row temperature-today">
        <div className="col-6">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
      <div className="mb-5 main-icon">
        <WeatherIcon code={props.data.icon} size={145} />
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
    </div>
  );
}
