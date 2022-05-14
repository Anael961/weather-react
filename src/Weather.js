import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "400257005fd84b55505351ed05840af2";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
    let units = "metric";
    let apiUrl = `${apiEndpoint}${city}&appid=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for city
  }

  function updateCity(event) {
    setCity(event.target.value);
    //stores input value
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container py-2">
          <form className="mb-5" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control py-2 border-right-0 border"
                  placeholder="Search for a city"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={updateCity}
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
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return <div className="loading-data">Loading...</div>;
  }
}
