import React from "react";
import "./dropdownSensor.css";

const DropdownSensor = ({ sensors, setSelect, select }) => {
  return (
    <div className="dropdownSensorWrapper">
      <div className="dropdownSensorWrapperBlock text-sm">
        <select
          className="os_dropdown"
          value={select}
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          {sensors.map((item) => (
            <option key={item} value={item.mac_Id}>
              {item.mac_Id}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownSensor;
