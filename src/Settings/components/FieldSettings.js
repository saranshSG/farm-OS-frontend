import React, { useState } from "react";
import SettingsNav from "./SettingsNav";
import FieldDetailtem from "./FieldDetailItem";

import "./FieldSettings.css";

const FieldSettings = () => {
  const [select, setSelect] = useState("Field");
  return (
    <SettingsNav
      select={select}
      setSelect={(val) => {
        setSelect(val);
      }}
    >
      {select === "Field" ? (
        <div className="fieldSettingsWrapper ">
          <div className="fieldSettingsBlock ">
            <div className="fieldSettingsInfoBlock flex justify-between  ">
              <div className="fieldSettings pb-2">
                <div className="py-1">TOTAL AREA PF FIELDS :</div>
                <div className="py-1">TOTAL NUMBER OF FIELDS :</div>
                <div className="py-1">TOTAL NUMBER OF CULTIVATED FIELDS :</div>
              </div>
              <div>
                <button
                  className="os_button py-1 w-full  text-sm font-bold  px-6 mx-2 rounded"
                  type="button"
                >
                  ADD FIELD
                </button>
              </div>
            </div>
            <div className="lg:h-80">
              <div className="fieldDetailsItemContainer h-full w-fit overflow-x-auto pr-1">
                <FieldDetailtem />
                <FieldDetailtem />
                <FieldDetailtem />
                <FieldDetailtem />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>{select}</div>
      )}
    </SettingsNav>
  );
};

export default FieldSettings;
