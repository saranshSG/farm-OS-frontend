import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./soilHealthForm.css";

const SoilHealthForm = ({ setSoilHealth, soilHealth }) => {
  return (
    <div className="soilHealthFormWrapper  py-2">
      <div className="soilHealthFormBlock w-full lg:max-w-lg md:max-w-lg max-w-xs">
        <div className="mb-6">
          <div className="soilHealthBlock  lg:w-full ">
            <div className="flex justify-between my-2">
              <label>Soil Health Date</label>
              <div className="datePickerContainer">
                <DatePicker
                  className="datePicker "
                  selected={soilHealth.date}
                  onChange={(date) => {
                    setSoilHealth((soilHealth) => ({
                      ...soilHealth,
                      date: date,
                    }));
                  }}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                />
              </div>
            </div>
            <div className="flex justify-between my-2">
              <label>Soil moisture</label>
              <input
                className="soilHealthInputField"
                id="Mositure"
                type="number"
                placeholder="Mositure"
                onChange={(e) => {
                  setSoilHealth((soilHealth) => ({
                    ...soilHealth,
                    soil_moisture: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="flex justify-between my-2">
              <label>Soil organic carbon</label>
              <input
                className="soilHealthInputField"
                id="Organic_carbon"
                type="number"
                placeholder="Organic carbon"
                onChange={(e) => {
                  setSoilHealth((soilHealth) => ({
                    ...soilHealth,
                    organic_carbon: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="flex justify-between my-2">
              <label>Nitrogen</label>
              <input
                className="soilHealthInputField"
                id="Nitrogen"
                type="number"
                placeholder="Nitrogen"
                onChange={(e) => {
                  setSoilHealth((soilHealth) => ({
                    ...soilHealth,
                    nitrogen: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="flex justify-between my-2">
              <label>Phosphorus</label>
              <input
                className="soilHealthInputField"
                id="Phosphorus"
                type="number"
                placeholder="Phosphorus"
                onChange={(e) => {
                  setSoilHealth((soilHealth) => ({
                    ...soilHealth,
                    phosphorus: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="flex justify-between my-2">
              <label>Potassium</label>
              <input
                className="soilHealthInputField"
                id="Potassium"
                type="number"
                placeholder="Potassium"
                onChange={(e) => {
                  setSoilHealth((soilHealth) => ({
                    ...soilHealth,
                    potassium: e.target.value,
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

export default SoilHealthForm;
