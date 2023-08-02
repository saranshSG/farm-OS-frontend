import React, { useState } from "react";
import "./SettingsNav.css";

const SettingsNav = (props) => {
  return (
    <div className="settingsNavWrapper">
      <div className="settingsNavBlock lg:flex rounded ">
        <div className="settingsNavItems px-2 py-6 flex justify-between lg:w-2/12 lg:block rounded-t lg:rounded-tl lg:rounded-bl">
          <div
            className={`settingsNavOptions my-4 px-3 text-left text-lg  ${
              props.select === "Field" ? "selected " : ""
            } `}
            onClick={() => {
              props.setSelect("Field");
            }}
          >
            <div className=" ">Fields</div>
          </div>
          <div
            className={`settingsNavOptions my-4 px-3 text-left text-lg  ${
              props.select === "Devices" ? "selected " : ""
            } `}
            onClick={() => {
              props.setSelect("Devices");
            }}
          >
            <div className=" ">Devices</div>
          </div>
          <div
            className={`settingsNavOptions my-4 px-3 text-left text-lg  ${
              props.select === "Users" ? "selected " : ""
            } `}
            onClick={() => {
              props.setSelect("Users");
            }}
          >
            <div className=" ">Users</div>
          </div>
          <div
            className={`settingsNavOptions my-4 px-3 text-left text-lg  ${
              props.select === "Billing" ? "selected " : ""
            } `}
            onClick={() => {
              props.setSelect("Billing");
            }}
          >
            <div className=" ">Billing</div>
          </div>
        </div>

        <div className="settingsRightContentBlock lg:w-9/12 px-4 lg:mx-12 py-4 lg:py-8">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default SettingsNav;
