import React from "react";
import Hoc from "../Home/components/hoc";
import FieldSettings from "./components/FieldSettings";
import Profile from "./components/Profile";
import "./Settings.css";

const Setttings = () => {
  return (
    <Hoc>
      <div className="settingsWrapper">
        <div className="settingsBlock">
          <div className="settingsContentContainer  px-2 py-16 lg:px-8 lg:py-20  lg:flex lg:justify-around ">
            <div className="settingsContentLeftBlock lg:ml-4  lg:w-8/12 ">
              <div className="settingsHeading font-bold">Settings</div>

              {
                
              }
              <div className="settingsContentLeftContainer  lg:py-4">
                <FieldSettings />
              </div>
            </div>
            
            <div className="settingsContentRightBlock lg:ml-12  lg:w-3/12">
              <div className="settingsHeading font-bold">Profile</div>
              <div className="settingsContentRightContainer lg:py-4">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hoc>
  );
};

export default Setttings;
