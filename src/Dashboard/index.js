import React from "react";

import FieldInfo from "./components/fieldInfo";
import CurrentWeather from "./components/currentWeather";
import ConnectedDevices from "./components/connectedDevice";
import AgroFeed from "./components/agroFeed";
import CropHealth from "./components/cropHealth";
import AgroMart from "./components/agroMart";
import CropCalendar from "./components/cropCalendar";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboardWrapper">
      <div className="dashboardBlock">
        <div className="dashboardContentContainer">
          <div className="dashboardContentLeftBlock">
            <div className="dashboardHeading font-bold ">Dashboard</div>
            <div className="dashboardContentLeftContainer">
              <div className="fieldInfoContainer">
                <FieldInfo />
              </div>
              <div className="currentWeatherConnectedDevicesAgroFeedContainer">
                <div className="currentWeatherConnectedDevicesContainer ">
                  <div className="currentWeatherContainer">
                    <CurrentWeather />
                  </div>
                  <div className="connectedDevicesAgroFeedMobileContainer">
                    <div className="connectedDevicesContainer">
                      <ConnectedDevices />
                    </div>
                    <div className="agroFeedMobileContainer">
                      <AgroFeed />
                    </div>
                  </div>
                </div>
                <div className="agroFeedContainer">
                  <AgroFeed />
                </div>
              </div>
            </div>
          </div>
          <div className="dashboardContentRightBlock">
            <div className="toolsAndAppsHeadingBlock">
              <div className="toolsHeadings font-bold">Tools & Apps</div>
              <div className="appsHeading font-bold">View App Store</div>
            </div>
            <div className="dashboardContentRightContainer">
              <div className="cropCalendarContainer">
                <CropCalendar />
              </div>
              <div className="cropHealthAgroMartBlock">
                <div className="cropHealthContainer">
                  <CropHealth />
                </div>
                <div className="agroMartContainer">
                  <AgroMart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
