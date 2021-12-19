import { useState, useEffect } from 'react';
import { Calendar, utils } from 'react-modern-calendar-datepicker';

function DatetimeInput({ getData }) {
  const [fromDate, setFromDate] = useState("Thêm ngày");
  const [toDate, setToDate] = useState("Thêm ngày");

  const [selectedDayRange, setSelectedDayRange] = useState({ from: null, to: null });

  const [datepicker, setDatepicker] = useState(false);
  const [fromFocus, setFromFocus] = useState(false);
  const [toFocus, setToFocus] = useState(false);

  const datetime = [{ focus: fromFocus, title: 'Nhận phòng', value: fromDate }, 
                    { focus: toFocus,   title: 'Trả phòng',  value: toDate }]

  useEffect(() => {
    if (selectedDayRange.from !== null) {
      const from = Object.values(selectedDayRange.from).join('-');
      setFromDate(from);
      setFromFocus(false);
      setToFocus(true);
    }
    if (selectedDayRange.to !== null) {
      const to = Object.values(selectedDayRange.to).join('-');
      setToDate(to);
      setToFocus(false);
      setDatepicker(false);
      getData({ from: fromDate, to });
    }
  }, [selectedDayRange]);

  return (
    <>
      <div 
        className="flex cursor-pointer"
        onClick={() => {
          setFromFocus(true);
          setDatepicker(true);
        }}
      >
        {datetime.map(item => 
          <div 
            className={`
              flex flex-col justify-center
              sm:px-4 px-8
              hover:bg-green-50
              rounded-full
              ${item.focus ? 'shadow-xl' : ''}
            `}
          >
            <h1 className="text-sm font-bold">{item.title}</h1>
            <p className="text-gray-400">{item.value}</p>
          </div>
        )}
      </div>
      {
          datepicker ?
          <div
            className="
              absolute
              top-9
              w-full
            "
          >
            <Calendar
              calendarClassName="cld"
              value={selectedDayRange}
              onChange={setSelectedDayRange}
              minimumDate={utils().getToday()}
              shouldHighlightWeekends
            />
          </div>
          : ''
        }
      <style>{`
        .cld {
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.9);
          transform: scale(0.85);
        }
      `}</style>
    </>
  )
}

export default DatetimeInput;