import React from "react";
import "./cropCycleLogs.css";
import CropCycleLogItem from "./cropCycleLogItem";

const croplogs = [
  {
    date: "12 Jan",
    stage: "Tilling",
    action: "VIEW SOIL CONDITION | VIEW INFO",
  },
  {
    date: "19 Jan",
    stage: "1st Weekly Soil Report",
    action: "VIEW SOIL CONDITION ",
  },
  {
    date: "22 Jan",
    stage: "Seed sowing",
    action: "VIEW SOIL CONDITION | VIEW INFO",
  },
  {
    date: "10 Feb",
    stage: "Irrigation",
    action: "VIEW SOIL CONDITION | VIEW INFO",
  },
  {
    date: "16 Feb",
    stage: "Irrigation    -> Prescribed Action",
    action: "VIEW SOIL CONDITION | VIEW INFO",
  },
];

const CropCycleLogs = () => {
  return (
    <div className="cropCycleLogsWrapper lg:w-9/12 lg:py-2">
      <div className="cropCycleLogsBlock px-4  rounded ">
        <div className="cropCycleLogsNav flex text-sm justify-between  text-center">
          <div className="text-left">
            <div className="text-lg font-bold">Activity Logs of</div>
            <div className="fieldSelect text-xs font-bold ">
              JAN 2021 FIELD1 : COTTON & MAZE
            </div>
          </div>
          <div className="text-sm py-2">
            <i class="fa-solid fa-download"></i>
          </div>
        </div>

        <div className="logsBlock my-4">
          {croplogs.map((item) => (
            <CropCycleLogItem
              date={item.date}
              stage={item.stage}
              action={item.action}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CropCycleLogs;
