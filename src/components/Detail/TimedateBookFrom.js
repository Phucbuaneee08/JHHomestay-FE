import { useState } from "react";
import { useSelector } from "react-redux";

/* Hiện mới lấy data từ redux, chưa thể thay đổi data */

const TimedateBookForm = () => {
  const { from, to } = useSelector((state) => state.filterReducer);
  const [dayRange, setDayRange] = useState({
    checkinDay: from,
    checkoutDay: to,
  });

  const handleInputChange = (e) => {
    const tempDayRange = { ...dayRange, [e.target.name]: e.target.value };
    setDayRange(tempDayRange);
  };

  return (
    <>
      <label htmlFor="checkin" className="flex flex-col p-2">
        <span className="text-sm pl-4">Ngày check in</span>
        <input
          className="border-2 px-4 py-2 rounded-full"
          id="checkin"
          type="text"
          name="checkinDay"
          value={dayRange.checkinDay}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="checkout" className="flex flex-col p-2">
        <span className="text-sm pl-4">Ngày check out</span>
        <input
          className="border-2 px-4 py-2 rounded-full"
          id="checkout"
          type="text"
          name="checkoutDay"
          value={dayRange.checkoutDay}
          onChange={handleInputChange}
        />
      </label>
    </>
  );
};

export default TimedateBookForm;
