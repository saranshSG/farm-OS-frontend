import React from "react";
import "./connectedDevices.css";

const ConnectedDevices = () => {
  return (
    <div className="connectedDevicesWrapper">
      <div className="connectedDevicesBlock">
        <div className="connectedDevicesHeading">CONNECTED DEVICES</div>
        <div className="connectedDevicesNumber">6</div>
        <div className="connectedDevicesDetails">
          <div className="connectedDevicesDetailsDescription">
            4 IOT Sensors
          </div>
          <div className="connectedDevicesDetailsDescription">
            1 Smart Tracker
          </div>
          <div className="connectedDevicesDetailsDescription">
            1 Control System
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedDevices;
