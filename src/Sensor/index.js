import React from "react";
import Hoc from "../Home/components/hoc";
import SensorAnalytics from "./components/sensorAnalytics";
import Weather from "./components/weather";
import "./sensor.css";

const Sensor = () => {
  return (
    <Hoc>
      <div className="sensorWrapper">
        <div className="sensorBlock">
          <div className="sensorContentContainer  px-2 py-16 lg:px-8 lg:py-20  lg:flex  ">
            <div className="sensorContentLeftBlock lg:ml-4  lg:w-9/12 ">
              <div className="sensorHeading font-bold">Sensor</div>
              <div className="sensorContentLeftContainer  lg:py-4">
                <SensorAnalytics />
              </div>
            </div>
            <div className="sensorContentRightBlock lg:ml-12  lg:w-3/8 ">
              <div className="sensorHeading font-bold">Weather</div>
              <div className="sensorContentRightContainer lg:py-4">
                <Weather />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hoc>
  );
};

export default Sensor;
