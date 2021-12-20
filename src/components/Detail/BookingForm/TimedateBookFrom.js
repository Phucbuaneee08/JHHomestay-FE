import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimedateBookForm = (props) => {
  const [date, setDate] = props.timedateProps;

  return (
    <>
      <div className="relative mt-6 border-t pt-2">
        <h1 className="text-xl font-medium">Chuyến đi của bạn</h1>
        <div className="flex items-center justify-between mt-2 px-12">
          <p className="text-md">Ngày check in</p>
          <div>
            <ReactDatePicker
              className="border rounded-md p-2 px-4 font-light hover:border-green-500 focus:outline-none"
              minDate={new Date()}
              selected={date.startDate}
              dateFormat="dd/MM/yyyy"
              onChange={(e) => {
                setDate({ ...date, startDate: e })
                console.log(e.getDate())
                }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 px-12">
          <p className="text-md">Ngày check out</p>
          <div>
            <ReactDatePicker
              className="border rounded-md p-2 px-4 font-light focus:outline-none"
              minDate={date.startDate}
              selected={date.endDate}
              dateFormat="dd/MM/yyyy"
              onChange={(e) => setDate({ ...date, endDate: e })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TimedateBookForm;
