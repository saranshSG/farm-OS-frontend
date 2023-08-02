import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./cropYieldForm.css";

const CropYeildForm = ({ setCropYield, cropYield }) => {
  return (
    <div className="soilHealthFormWrapper  py-2">
      <div className="soilHealthFormBlock w-full lg:max-w-lg md:max-w-lg max-w-xs">
        <div className="mb-6">
          <div className="soilHealthBlock  lg:w-full ">
            <div className="flex justify-between my-2">
              <label>Crop Type</label>
              <input
                className="soilHealthInputField"
                id="Crop_type"
                type="text"
                placeholder="Crop Type"
                onChange={(e) => {
                  setCropYield((soilHealth) => ({
                    ...soilHealth,
                    crop_type: e.target.value,
                  }));
                }}
              />
            </div>

            <div className="flex justify-between my-2">
              <label>Crop Cycle Start</label>
              <div className="datePickerContainer">
                <DatePicker
                  className="datePicker"
                  selected={cropYield.crop_cycle_start}
                  onChange={(date) => {
                    setCropYield((soilHealth) => ({
                      ...soilHealth,
                      crop_cycle_start: date,
                    }));
                  }}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                />
              </div>
            </div>

            <div className="flex justify-between my-2">
              <label>Crop Cycle End</label>
              <div className="datePickerContainer">
                <DatePicker
                  className="datePicker "
                  selected={cropYield.crop_cycle_end}
                  onChange={(date) => {
                    setCropYield((soilHealth) => ({
                      ...soilHealth,
                      crop_cycle_end: date,
                    }));
                  }}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                />
              </div>
            </div>

            <div className="flex justify-between my-2">
              <label>Crop Cycle Yield</label>
              <input
                className="soilHealthInputField"
                id="yield"
                type="text"
                placeholder="Yield"
                onChange={(e) => {
                  setCropYield((soilHealth) => ({
                    ...soilHealth,
                    yield: e.target.value,
                  }));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropYeildForm;
