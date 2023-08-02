import React, { useState } from "react";
import "./cropCycle.css";
import CropCycleItem from "./cropCycleItem";

const cropdata = [
  {
    date: "JAN 2021",
    field: "1",
    crop: "COTTON & MAZE",
    stage: "Irrigation",
  },
  {
    date: "JAN 2022",
    field: "3",
    crop: "COTTON & MAZE",
    stage: "Irrigation",
  },
];

const CropCycle = () => {
  const [select, setSelect] = useState("Current");
  return (
    <div className="cropCycleWrapper lg:w-9/12 lg:py-2">
      <div className="cropCycleBlock px-4 py-1 rounded ">
        <div className="cropCycleNav flex text-sm  text-center">
          <div
            className={`cropCycleOption  py-4 lg:py-2 lg:w-40 ${
              select === "Current" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("Current");
            }}
          >
            <div className="py-1">Current Crop Cycle</div>
          </div>

          <div
            className={`cropCycleOption  py-4 lg:py-2 lg:w-40   ${
              select === "Past" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("Past");
            }}
          >
            <div className="py-1">Past Crop Cycle</div>
          </div>

          <div className="py-2 cropCycleOption ">
            <button className="os_button py-1 w-full  text-sm font-bold  my-2 lg:my-0 px-2 rounded">
              Add New Crop Cycle
            </button>
          </div>
        </div>

        <div>
          {cropdata.map((item) => (
            <CropCycleItem
              date={item.date}
              field={item.field}
              crop={item.crop}
              stage={item.stage}
              key={item.field}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CropCycle;
