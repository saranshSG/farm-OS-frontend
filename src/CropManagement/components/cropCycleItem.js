import React from "react";
import "./cropCycleItem.css";

const CropCycleItem = ({ date, field, crop, stage }) => {
  return (
    <div className="cropCycleItemWrapper flex justify-between rounded my-2 py-2">
      <div className="cropCycleItemBlock lg:w-8/12 ">
        <div className=" px-4 py-2 ">
          <div className="dateFieldCropInfo flex text-left font-bold text-sm">
            <div className="">{date}</div>
            <div className="px-1">FIELD {field} :</div>
            <div className="px-1">{crop}</div>
          </div>
          <div className="cropStageInfo text-xs ">Current Stage: {stage}</div>
        </div>
      </div>
      <div className="optionsBlock  py-4 px-3 text-sm text-center ">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  );
};

export default CropCycleItem;
