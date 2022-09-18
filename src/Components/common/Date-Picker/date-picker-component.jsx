import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePicker = ({ value, onChange }) => {
  return (
    <div>
      <label className="w-76 mt-3 ml-4 text-gray-400 text-start">
        تاریخ تولد خود را انتخاب کنید:
        <DatePicker
          placeholder="کلیک کنید"
          inputClass="border-none font-xl rounded-3xl"
          calendar={persian}
          locale={persian_fa}
          calendarPosition="top-bottom"
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
};

export default DatePicker;
