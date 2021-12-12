import { useState } from "react";
import ServiceBookForm from "./ServiceBookForm";
import TimedateBookForm from "./TimedateBookFrom";

const initialBookForm = {
  username: "",
  phoneNumber: "",
  identificationNumber: "",
  email: "",
};

const BookForm = () => {
  const [bookForm, setBookForm] = useState(initialBookForm);

  const handleInputChange = (e) => {
    if (e.target.validity.valid) {
      const tempBookForm = { ...bookForm, [e.target.name]: e.target.value };
      setBookForm(tempBookForm);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 m-4">
        <label htmlFor="username" className="flex flex-col p-2">
          <span className="text-sm pl-4">Họ và Tên</span>
          <input
            className="border-2 px-4 py-2 rounded-full"
            id="username"
            type="text"
            name="username"
            value={bookForm.username}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="phone-number" className="flex flex-col p-2">
          <span className="text-sm pl-4">Số điện thoại</span>
          <input
            className="border-2 px-4 py-2 rounded-full"
            id="phone-number"
            type="text"
            name="phoneNumber"
            pattern="[0-9]*"
            value={bookForm.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="identification-number" className="flex flex-col p-2">
          <span className="text-sm pl-4">Số chứng minh nhân dân</span>
          <input
            className="border-2 px-4 py-2 rounded-full"
            id="identification-number"
            type="text"
            name="identificationNumber"
            pattern="[0-9]*"
            value={bookForm.identificationNumber}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="email" className="flex flex-col p-2">
          <span className="text-sm pl-4">Email</span>
          <input
            className="border-2 px-4 py-2 rounded-full"
            id="email"
            type="text"
            name="email"
            value={bookForm.email}
            onChange={handleInputChange}
          />
        </label>
        <TimedateBookForm />
        <ServiceBookForm />
      </div>
      <button onClick={() => console.log(bookForm)}>Click</button>
    </>
  );
};

export default BookForm;
