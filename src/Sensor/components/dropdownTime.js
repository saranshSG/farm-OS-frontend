import React from "react";
import { timeConverter } from "../../Utilities/UnixDateHelper";
import "./dropdownTime.css";

const DropdownTime = ({ sensors, setSelect, select }) => {
  return (
    <div className="dropdownTimeWrapper ">
      <div className="dropdownTimeWrapperBlock text-sm">
        <select
          className="os_dropdown"
          value={select}
          onChange={(e) => {
            console.log("selected ts", e.target.value);
            setSelect(e.target.value);
          }}
        >
          {sensors.map((item) => (
            <option className="os_dropdownOption" key={item.ts} value={item.ts}>
              {timeConverter(item.ts)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownTime;
