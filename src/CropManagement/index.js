import React from "react";
import Hoc from "../Home/components/hoc";
import CropCycle from "./components/cropCycle";
import CropCycleLogs from "./components/cropCycleLogs";
import "./CropManagement.css";

const CropMangement = () => {
  return (
    <Hoc>
      <div className="cropWrapper">
        <div className="cropBlock">
          <div className="cropContentContainer  px-2 py-16 lg:px-16 lg:py-20  lg:flex  ">
            <div className="cropContentLeftBlock lg:ml-4 lg:mb-12 lg:w-6/12 ">
              <div className="cropHeading my-4 lg:my-0 font-bold">
                Crop Management
              </div>
              <div className="cropContentLeftContainer  lg:py-4">
                <CropCycle />
              </div>
            </div>
            <div className="cropContentRightBlock lg:ml-12 lg:mb-12 lg:w-6/12 ">
              <div className="cropHeading my-4 lg:my-0 font-bold">Logs</div>
              <div className="cropContentRightContainer lg:py-6">
                <CropCycleLogs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hoc>
  );
};

export default CropMangement;
