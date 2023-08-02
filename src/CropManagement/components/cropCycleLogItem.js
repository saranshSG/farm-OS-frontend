import React from "react";
import "./cropCycleLogItem.css";

const CropCycleLogItem = ({ date, stage, action }) => {
  return (
    <div className="cropCycleLogItemWrapper ">
      <div className="cropCycleLogItemBlock">
        <div className="logsContainer flex  w-0/12 ">
          <div className="logDateBlock w-2/12 py-4 mr-2">{date}</div>
          <div className="mx-1 text-xl py-3">-</div>

          <div className="stageLogDetails py-3 w-10/12">
            <div> {stage}</div>
            <div className="text-xs"> {action}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropCycleLogItem;
