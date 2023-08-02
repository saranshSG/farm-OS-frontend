import React from "react";
import Hoc from "../Home/components/hoc";
import CropHealth from "./components/cropHealth";
import ConnectedDevices from "./components/connectedDevice";
import CurrentWeather from "./components/currentWeather";
import AgroMart from "./components/agroMart";
import "./AppsTools.css";

const AppsTools = () => {
  return (
    <Hoc>
      <div className="toolsWrapper">
        <div className="toolsBlock">
          <div className="toolsContentContainer  px-2 py-16 lg:px-16 lg:py-20  lg:flex  ">
            <div className="toolsContentLeftBlock lg:ml-4 lg:mb-12 lg:w-8/12 ">
              <div className="toolsHeading my-4 lg:my-0 font-bold">
                Apps & Tools
              </div>
              <div className="toolsContentLeftContainer  lg:flex lg:justify-between  lg:py-4 lg:w-9/12 ">
                <div className="lg:w-3/12 w-6/12 py-2">
                  <CropHealth />
                </div>

                <ConnectedDevices />

                <CurrentWeather />
              </div>
            </div>
            <div className="toolsContentRightBlock lg:ml-12 lg:mb-12 lg:w-6/12 ">
              <div className="toolsHeading my-4 lg:my-0 font-bold">
                App Store
              </div>
              <div className="toolsContentRightContainer lg:py-6">
                <div className="w-4/12">
                  <AgroMart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hoc>
  );
};

export default AppsTools;
