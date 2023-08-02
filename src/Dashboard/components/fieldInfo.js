import React from "react";
import Map from "../../images/map.jpg";
import "./fieldInfo.css";
import { useSelector } from "react-redux";

const FieldInfo = () => {
  const loginInfo = useSelector((state) =>
    state.User.loginInfo ? state.User.loginInfo : null
  );
  const cropName= loginInfo.farm.cropYield[0].crop_type;
  
  return (
    <div className="fieldInfoWrapper">
      <div className="fieldInfoBlock">
        <div className="mapInfoBlock">
          <img src={Map} alt="Field Map" className="fieldMapImg" />
          <div className="fieldMapInfoBlock">
            <div className="fieldIdBlock">
              <div className="fieldId">Field 1</div>
              <div className="dropDownIcon">
                <i className="fas fa-sort-down"></i>
              </div>
            </div>
            <div className="fieldLatLongBlock">
              <div className="fieldLat">Lat:</div>
              <div className="fieldLong">Long:</div>
            </div>
          </div>
        </div>
        <div className="fieldInfoDetailsBlock">
          <div className="fieldInfoDetails">
            <div className="fieldInfoDetailsHeading">Field Info</div>
            <div className="fieldinfoDetail">Crop:-- {cropName}</div>
            <div className="fieldinfoDetail">Stage:--</div>
            <div className="fieldinfoDetail">Soil Health: 86%</div>
          </div>
          <div className="fieldInchargeDetailsBlock">
            <div className="fieldInfoDetailsHeading">Field Incharge</div>
            <div className="inchargeCirclesBlock">
              <div className="inchargeCircle1"></div>
              <div className="inchargeCircle2"></div>
              <div className="inchargeCircle3"></div>
              <div className="inchargeCircle4"></div>
              <div className="inchargeCircle5">+</div>
            </div>
            <div className="manageBtn">MANAGE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldInfo;
