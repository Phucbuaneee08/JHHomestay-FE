import { XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const UserDataBookForm = (props) => {
  const [data, setData] = props.userProps;
  const [name, setName] = useState("");

  const handleChangeName = (e) => setName(e.target.value);

  const handleEnterName = (e) => {
    if (e.key === "Enter" && name !== "") {
      const tempAccompanyingCustomerName = [...data.accompanyingCustomerName, name.trim()];
      setData({ ...data, accompanyingCustomerName: tempAccompanyingCustomerName });
      setName("");
    }
  };

  const handleRemoveName = (index) => {
    const tempAccompanyingCustomerName = [...data.accompanyingCustomerName];
    tempAccompanyingCustomerName.splice(index, 1);
    setData({ ...data, accompanyingCustomerName: tempAccompanyingCustomerName });
  };

  const handleInputChange = (e) => {
    if (e.target.validity.valid) {
      const tempData = { ...data, [e.target.name]: e.target.value };
      setData(tempData);
    }
  };

  return (
    <>
      <h1 className="text-xl font-medium">Thông tin liên hệ</h1>

      <div>
        <label htmlFor="mainCustomerName" className="flex flex-col p-2">
          <p className="text-md pl-4">Họ và Tên người đặt phòng</p>
          <input
            className="border px-4 py-2 rounded-md focus:outline-none"
            id="mainCustomerName"
            type="text"
            name="mainCustomerName"
            value={data.mainCustomerName}
            onChange={(e) =>
              setData({ ...data, mainCustomerName: e.target.value })
            }
            autoComplete="off"
          />
        </label>
        <label htmlFor="accompanyingCustomerName" className="flex flex-col p-2">
          <p className="text-md pl-4">
            Họ và Tên người đi kèm
          </p>
          <input
            className="border px-4 py-2 rounded-md focus:outline-none"
            id="accompanyingCustomerName"
            type="text"
            name="accompanyingCustomerName"
            value={name}
            onChange={handleChangeName}
            onKeyDown={handleEnterName}
            autoComplete="off"
          />
        </label>
        <div className="flex flex-wrap">
          {data.accompanyingCustomerName.map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 pr-1 border rounded-md m-2 flex items-center pointer-cursor"
            >
              {item}
              <button
                className="ml-2 w-6 h-6 p-1 rounded-full hover:bg-gray-200"
                onClick={() => handleRemoveName(index)}
              >
                <XIcon />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* ======================================================== */}

      <label htmlFor="phone-number" className="flex flex-col p-2">
        <span className="text-md pl-4">Số điện thoại</span>
        <input
          className="border px-4 py-2 rounded-md focus:outline-none"
          id="phone-number"
          type="text"
          name="phoneNumber"
          pattern="[0-9]*"
          value={data.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="identification-number" className="flex flex-col p-2">
        <span className="text-md pl-4">Số chứng minh nhân dân</span>
        <input
          className="border px-4 py-2 rounded-md focus:outline-none"
          id="identification-number"
          type="text"
          name="identificationNumber"
          pattern="[0-9]*"
          value={data.identificationNumber}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="email" className="flex flex-col p-2">
        <span className="text-md pl-4">Email</span>
        <input
          className="border px-4 py-2 rounded-md focus:outline-none"
          id="email"
          type="text"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
      </label>
    </>
  );
};

export default UserDataBookForm;
