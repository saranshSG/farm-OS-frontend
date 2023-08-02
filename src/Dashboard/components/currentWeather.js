import React from "react";
import cloud from "../../images/windy.png";
import "./currentWeather.css";
import axios from 'axios';
import { useState, useEffect } from "react";

const CurrentWeather = () => {
  const [weather, setWeather] = useState({});

  async function fetchWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        const { data } = await axios.get(`http://dev.sensegrass.com/api/weather/getCurrent?lat=${lat}&lon=${long}`);
        setWeather(data[0]);
      });
    } else {
      alert('Geolocation is required for current weather at your location. Please allow location access!');
    }
  }

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="currentWeatherWrapper">
      <div className="currentWeatherBlock">
        <div className="currentWeatherHeading">CURRENT WEATHER</div>
        <div className="currentWeatherIconBlock flex justify-center">
          <img src={cloud} alt="weatherIcon" className="currentWeatherIcon" />
        </div>
        <div className="currentWeatherTempBlock">
          <div className="currentWeatherTemp">{weather.temperature || 80}&deg;</div>
          <div className="currentWeatherMeasureSys"> &nbsp;F</div>
        </div>
        <div className="currentWeatherDescription">{weather.description || "BRIGHT WINDY"}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
