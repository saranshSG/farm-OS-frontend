import React from "react";
import "./sensorAnalyticsItem.css";

const SensorAnalyticsItem = ({ name, unit, value }) => {
  return (
    <div className="sensorAnalyticsItemWrapper ">
      <div className="sensorAnalyticsItemBlock text-center px-2 py-4">
        <div className="sensorAnalyticsItemTitle text-sm font-bold">{name}</div>
        <div className="sensorAnalyticsItemUnit ">{unit}</div>
        <div className="sensorAnalyticsItemData py-4 text-2xl ">{value}</div>
        <div className="sensorAnalyticsItemRating"></div>
        <div className="sensorAnalyticsItemIdealRangeBlock">
          <div className="sensorAnalyticsItemIdealRangeTitle font-bold ">
            IDEAL RANGE
          </div>
          <div className="sensorAnalyticsItemIdealRangeDescription">90/100</div>
        </div>
      </div>
    </div>
  );
};

export default SensorAnalyticsItem;
