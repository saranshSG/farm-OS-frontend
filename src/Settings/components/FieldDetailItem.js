import React from "react";
import field_polygon from "../../assests/field-polygon.jpg";
import "./FieldDetailItem.css";

const FieldDetailtem = () => {
  return (
    <div className="fieldDetailItemWrapper py-2">
      <div className="fieldDetailItemBlock">
        <div className="fieldDetailsTop flex justify-between rounded-tl rounded-tr">
          <div className=" w-4/12  lg:w-2/12 py-2 px-2">
            <img
              className="w-full rounded"
              src={field_polygon}
              alt="field drawn on map"
            />
          </div>
          <div className=" fieldDetailsContainer w-8/12 text-sm py-3 lg:py-5 ">
            <div>
              <b>FIELD NAME</b>
            </div>
            <div className="fieldLocationDetails flex justify-between flex-wrap lg:w-8/12">
              <div>
                <b>Location :</b> 94.33 lat | 103.12 long
              </div>
              <div>
                <b>Size :</b> 31ac
              </div>
              <div>
                <b>Stage :</b> Harvesting{" "}
              </div>
            </div>
          </div>
          <div className="fieldDetailActions w-2/12 text-right py-2 px-2">
            <div className="py-1">
              <b>Edit</b>
            </div>
            <div className="py-1">
              <b>Delete</b>
            </div>
          </div>
        </div>
        <div className="fieldDetailsBottom rounded-bl rounded-br flex justify-between px-4 py-3 text-xs">
          <div className=" ">
            <b>Crop:</b> Wheat
          </div>
          <div className=" ">
            <b>Water Source:</b> Ground water
          </div>
          <div className=" ">
            <b>Soil Type:</b> Black soil
          </div>
          <div className=" ">
            <b>Terran Type:</b> plain
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldDetailtem;
