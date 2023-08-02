import React, { useState, useEffect } from "react";
import windy_icon from "../../assests/windy_icon.png";
import { getWeather } from "../sensorAction";
import "./weather.css";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState();

  useEffect(() => {
    const getData = async () => {
      let values = {
        lat: "35",
        lon: "139",
      };

      let response = await getWeather(values);

      setCurrentWeather(response);
    };
    getData();
  }, []);
  return (
    <div className="weatherWrapper">
      <div className="weatherBlock px-2 py-2">
        <div className="weatherIconInfoContainer flex px-4 py-6  ">
          <div className="weatherIconBlock w-4/12 ">
            <img
              className="w-full"
              src={
                currentWeather
                  ? `http://openweathermap.org/img/w/${currentWeather.icon}.png`
                  : windy_icon
              }
              alt="Weather_Icon"
            />
          </div>
          <div className="weatherBriefInfoBlock text-center pt-4 font-bold ">
            <div className="weatherTemperature ">
              {currentWeather ? currentWeather.temperature : null} &#176;F
            </div>
            <div className="weatherTemperatureDescription text-sm ">
              {currentWeather ? currentWeather.description.toUpperCase() : null}
            </div>
          </div>
        </div>
        <div className="weatherInfoBlock px-8 py-2">
          <div className="weatherInfoParameter py-3">
            Precipitation Intensity: 81
          </div>
          <div className="weatherInfoParameter py-3">
            Precipitation Probability: 81
          </div>
          <div className="weatherInfoParameter py-3">
            Pressure : {currentWeather ? currentWeather.pressure : null} hPa
          </div>
          <div className="weatherInfoParameter py-3">
            Wind Speed: {currentWeather ? currentWeather.wind_speed : null}{" "}
            miles/hr
          </div>
          <div className="weatherInfoParameter py-3">
            Wind Direction:{" "}
            {currentWeather ? currentWeather.wind_direction : null} degrees
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
