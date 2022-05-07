import React, { useState } from "react";
import axios from "axios";
import icon from "./icon.png";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "",
      date: "Sunday 14:30",
    });
  }

  if (weatherData.ready) {
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
              <span className="maintemp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="tempunits">
                <a href="/">°C </a> | <a href="/">°F </a>
              </span>
            </div>
            <div className="col-6">
              <ul>
                <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
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
            <div className="text-capitalize weather-description">
              {weatherData.description}
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
      </div>
    );
  } else {
    const apiKey = "400257005fd84b55505351ed05840af2";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
    let units = "metric";
    let apiUrl = `${apiEndpoint}${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);

    return "Loading...";
  }
}
