import React from "react";
import field_img from "../../assests/field_img.png";
import Basic_Sensor from "../../assests/Basic_Sensor.png";
import "./sensorStatus.css";

const SensorStatus = () => {
  return (
    <div className="sensorStatusWrapper">
      <div className="sensorStatusBlock">
        <div className="sensorStatusFieldImgBlock">
          <img className="" src={field_img} alt="field icon" />
        </div>
        <div className="sensorStatusInfoBlock flex py-6 px-4">
          <div className="sensorIconBlock w-2/5 ">
            <img
              className="sensorIconImg w-2/4"
              src={Basic_Sensor}
              alt="Sensor ICON"
            />
          </div>
          <div className="sensorStatusDescriptionBlock">
            <div className="text-sm px-4">
              <div className="sensorStatusParameter py-1">Status : Online</div>
              <div className="sensorStatusParameter py-1">
                Battery Status: 92%
              </div>
              <div className="sensorStatusParameter py-1"> mac ID :1102100</div>
            </div>

            <div className="sensorViewGraphBlock py-1 w-full  ">
              <button
                className="os_button py-1 w-full text-sm font-bold lg:h-3/4  mx-2 rounded"
                type="button"
              >
                VIEW GRAPH
              </button>
            </div>
            <div className="sensorDownloadReportBlock py-1  w-full">
              <button
                className="os_button py-1 w-full  text-sm font-bold lg:h-3/4  mx-2 rounded"
                type="button"
              >
                DOWNLOAD REPORT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorStatus;
