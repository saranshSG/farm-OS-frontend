import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./cropCalendar.css";

const CropCalendar = () => {
  return (
    <div className="cropCalendarWrapper">
      <div className="cropCalendarBlock">
        <div className="cropCalendarHeading">CROP CALENDAR</div>
        <DayPicker numberOfMonths={2} />
      </div>
    </div>
  );
};

export default CropCalendar;
