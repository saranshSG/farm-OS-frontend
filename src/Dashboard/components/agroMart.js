import React from "react";
import agro from "../../images/agro.png";
import "./agroMart.css";

const AgroMart = () => {
  return (
    <div className="agroMartWrapper">
      <div className="agroMartBlock ">
        <div className="agroMartIcon">
          <img src={agro} alt="agroIcon" className="agroImg" />
        </div>
        <div className="agroMartHeading">AGRO MART</div>
      </div>
    </div>
  );
};

export default AgroMart;
