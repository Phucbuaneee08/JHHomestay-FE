import { useState } from "react";

const serviceList = [
  { id: "service-0", value: false, label: "Bể bơi" },
  { id: "service-1", value: false, label: "Phòng karaoke" },
  { id: "service-2", value: false, label: "Suối nước nóng" },
  { id: "service-3", value: false, label: "Coffee bên hồ" },
  { id: "service-4", value: false, label: "Dọn phòng" },
  { id: "service-5", value: false, label: "Cho thuê xe tự lái" },
  { id: "service-6", value: false, label: "Dịch vụ giặt ủi" },
  { id: "service-7", value: false, label: "Massage trị liệu" },
  { id: "service-8", value: false, label: "Xông hơi" },
  { id: "service-9", value: false, label: "Thuê hướng dẫn viên du lịch" },
];

const Service = () => {
  const [services, setServices] = useState(serviceList);

  const handleCheck = (index) => () =>
    setServices([
      ...services.slice(0, index),
      {
        ...services[index],
        value: !services[index].value,
      },
      ...services.slice(index + 1),
    ]);

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Tiện nghi</h1>
        <div className="grid grid-cols-2 gap-4">
          {services.map((item, index) => (
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                {...item}
                onClick={handleCheck(index)}
                className="h-4 w-4"
              />
              <span className="text-gray-900 font-medium">{item.label}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
