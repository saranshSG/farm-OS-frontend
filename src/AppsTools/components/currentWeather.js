import React from "react";
import cloud from "../../images/windy.png";
import "./currentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="currentWeatherWrapper">
      <div className="currentWeatherBlock">
        <div className="currentWeatherHeading">CURRENT WEATHER</div>
        <div className="currentWeatherIconBlock flex justify-center">
          <img src={cloud} alt="weatherIcon" className="currentWeatherIcon" />
        </div>
        <div className="currentWeatherTempBlock">
          <div className="currentWeatherTemp">80&deg;</div>
          <div className="currentWeatherMeasureSys"> &nbsp;F</div>
        </div>
        <div className="currentWeatherDescription">BRIGHT WINDY</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
