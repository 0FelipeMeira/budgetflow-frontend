"use client ";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HomeDatePicker = ({
  date,
  setDate,
}: {
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
}) => {
  return (
    <div className="flex flex-col items-center ">
      <label className="font-semibold px-1">Pick a date</label>
      <DatePicker
        className="w-full border text-center p-1 rounded-md"
        selected={date}
        onChange={(date: Date | null) => setDate(date)}
        dateFormat="yyyy/MM/dd"
      />
    </div>
  );
};

export default HomeDatePicker;
