import React, { useState, useEffect } from "react";

import DropdownSensor from "./dropdownSensor";
import DropdownTime from "./dropdownTime";
import SensorAnalyticsItem from "./sensorAnalyticsItem";
import SensorStatus from "./sensorStatus";
import BuySensorTile from "./buySensorTile";
import { getSensorData } from "../sensorAction";
import "./sensorAnalytics.css";

// const sensorOptions = [
//   {
//     ts: 1646904215055,
//     mac_Id: "c8:c9:a3:fb:1e:14",
//     data: {
//       Light: 390,
//       Co2_Aeration1: 0,
//       EC1: 0.324,
//       Air_Presssure1: 0,
//       Soil_Temperature1: -127,
//       pH: 7,
//       Soil_Moisture1: 100,
//       Salinity1: 0,
//       Air_humidity1: 0,
//       Air_Temperature1: 0,
//     },
//   },
// ];

const SensorAnalytics = () => {
  const [selectedSensor, setSelectedSensor] = useState();
  const [selectedTime, setSelectedTime] = useState(1649162010834);

  const [sensorOptions, setSensorOptions1] = useState([]);

  const timestamp = [
    {
      ts: 1649162010834,
    },
    {
      ts: 1649186829213,
    },
    {
      ts: 1649171480210,
    },
  ];

  useEffect(() => {
    const getData = async () => {
      let values = {
        mac_Id: "c8:c9:a3:fb:1e:14",
        ts: selectedTime,
      };

      let response = await getSensorData(values);

      console.log(response);
      setSensorOptions1(response);
    };
    getData();
  }, [selectedTime]);

  return (
    <div className="sensorAnalyticsWrapper">
      <div className="sensorAnalyticsBlock">
        <div className="sensorAnalyticsNav  lg:flex px-2  py-4 lg:py-0 lg:pt-3">
          <div className=" lg:w-7/12 ">
            <div className="sensorAnalyticsNavLeft flex justify-between lg:pr-4">
              <div className="sensorAnalyticsNavChooseSensorBlock text-center  ">
                <div className="sensorAnalyticsNavSensorOptions text-lg ">
                  <DropdownSensor
                    sensors={sensorOptions}
                    select={selectedSensor}
                    setSelect={() => {
                      setSelectedSensor();
                    }}
                  />
                </div>
              </div>
              <div className="sensorAnalyticsNavTimeOptions text-lg ">
                <DropdownTime
                  sensors={timestamp}
                  select={selectedTime}
                  setSelect={(val) => {
                    setSelectedTime(val);
                  }}
                />
              </div>
            </div>
            <div className="sensorAnalyticsNavSensorLocation mb-2 lg:mt-1 ml-1  ">
              SENSOR LOCATION LAT: {} | LONG: {}
            </div>{" "}
          </div>
          <div className="sensorAnalyticsNavRight  lg:w-5/12 lg:flex lg:justify-end flex justify-center ">
            <button
              className="os_button py-1 px-2 text-sm font-bold lg:h-3/4 w-11/12 lg:w-2/5 mx-2 rounded"
              type="button"
            >
              ADD SENSOR
            </button>
          </div>
        </div>

        <div className="sensorAnalyticsContentConatiner py-2 ">
          <div className="sensorAnalyticsContentBlock lg:flex lg:justify-between lg:px-2  ">
            <div className="sensorAnalyticsContentLeft lg:w-10/12 lg:h-96  lg:py-0">
              <div className="sensorAnalyticsItemContainer flex flex-wrap h-full w-fit overflow-x-auto ">
                {sensorOptions[0]
                  ? Object.keys(sensorOptions[0].data).map((key, i) =>
                      sensorOptions[0].data[key] ? (
                        <div
                          className=" px-2 py-3  w-6/12   lg:w-3/12 "
                          key={i}
                        >
                          <SensorAnalyticsItem
                            name={key}
                            unit={"C"}
                            value={
                              sensorOptions[0].data[key]
                                ? sensorOptions[0].data[key]
                                : "-"
                            }
                          />
                        </div>
                      ) : null
                    )
                  : null}
                {sensorOptions[0] ? (
                  <div className="px-2 py-4  w-6/12   lg:w-3/12 ">
                    <BuySensorTile />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="sensorAnalyticsContentRight lg:w-4/12 ">
              <div className="sensorStatusContainer   px-10 lg:px-1   ">
                <SensorStatus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorAnalytics;
