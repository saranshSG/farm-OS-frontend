import React from "react";
import "./buySensorTile.css";

const BuySensorTile = ({ link }) => {
  return (
    <div className="buySensorTileWrapper py-6  rounded">
      <div className="buySensorTileBlock text-center px-2 py-4">
        <div className="buySensorTileTitle   font-bold ">BUY PRO SENSOR</div>
        <div className="buySensorTileDescription text-sm pt-6">
          14+ Parameters including NPK
        </div>
      </div>
    </div>
  );
};

export default BuySensorTile;
