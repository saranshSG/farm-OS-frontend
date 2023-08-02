import React from "react";
import "./quickAccess.css";
import { Link } from "react-router-dom";

const QuickAccess = ({ select, setSelect }) => {
  return (
    <div className="quickAccessWrapper">
      <div className="quickAcessMenuBlock mt-1">
        <div className="quickAccessActions">+Add Activity</div>
        <div className="quickAcessMenuOptionsBlock py-2">
          <div
            className={`quickAccessMenuOption   ${
              select === "dashboard" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("dashboard");
            }}
          >
            <Link to="/home/dashboard">
              <i class="fas fa-th-large"></i>
            </Link>
          </div>

          <div
            className={`quickAccessMenuOption   ${
              select === "crop_management" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("crop_management");
            }}
          >
            <Link to="/home/crop">
              <i class="fas fa-leaf"></i>
            </Link>
          </div>
          <div
            className={`quickAccessMenuOption   ${
              select === "sensor" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("sensor");
            }}
          >
            <Link to="/home/sensor">
              <i class="fas fa-microchip"></i>
            </Link>
          </div>
          <a href="http://gis.sensegrass.com/">
            <div
              className={`quickAccessMenuOption   ${
                select === "globe" ? "selected " : ""
              } `}
            >
              <i class="fas fa-globe-americas"></i>
            </div>
          </a>
          <div
            className={`quickAccessMenuOption   ${
              select === "settings" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("settings");
            }}
          >
            <Link to="/home/settings">
              <i class="fas fa-cog"></i>
            </Link>
          </div>
          <div
            className={`quickAccessMenuOption   ${
              select === "tools" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("tools");
            }}
          >
            <Link to="/home/tools">
              <i class="fas fa-puzzle-piece"></i>
            </Link>
          </div>
        </div>
        <div className="quickAccessActions">Ask SANA</div>
      </div>
      <div className="quickAccessActionsMobile">SANA</div>
    </div>
  );
};

export default QuickAccess;
