import React from "react";
import icon from "./icon.png";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Toronto",
    temperature: 12,
    feelsLike: 12,
    humidity: 11,
    wind: 23,
    date: "Sunday 14:30",
    description: "Broken Clouds",
  };

  return (
    <div className="Weather">
      <div className="container py-2">
        <form className="mb-5">
          <div className="row">
            <div className="input-group">
              <input
                type="search"
                className="form-control py-2 border-right-0 border"
                placeholder="Search for a city"
                autoComplete="off"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary border-left-0 border"
                  type="submit"
                >
                  <i className="fa fa-search"></i>
                </button>
                <span className="col marker-outline">
                  <button
                    className="location-marker"
                    id="current-location-button"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="row temperature-today">
          <div className="col-6">
            <span className="maintemp">{weatherData.temperature}</span>
            <span className="tempunits">
              <a href="/">°C </a> | <a href="/">°F </a>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {weatherData.feelsLike}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="text-center mb-5">
          <img
            src={icon}
            className="main-icon img-fluid"
            alt="sunny day icon"
          />
        </div>
        <h3>{weatherData.date}</h3>
        <div className="row todays-highlights">
          <div className="weather-description">{weatherData.description}</div>
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
    </div>
  );
}
