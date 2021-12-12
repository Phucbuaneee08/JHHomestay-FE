import { useState } from "react";

const initialBookForm = [
  {
    id: "username",
    label: "Họ và Tên",
    type: "text",
    value: "",
  },
  {
    id: "phone-number",
    label: "Số điện thoại",
    type: "text",
    pattern: "[0-9]*",
    value: "",
  },
  {
    id: "identification-number",
    label: "Số chứng minh nhân dân",
    type: "text",
    pattern: "[0-9]*",
    value: "",
  },
  { id: "email", label: "Email", type: "email", value: "" },
];

const BookForm = () => {
  const [bookForm, setBookForm] = useState(initialBookForm);

  const handleInputChange = (index) => (e) => {
    if (e.target.validity.valid) {
      const tempBookForm = bookForm;
      tempBookForm[index].value = e.target.value;
      setBookForm(tempBookForm);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 m-4">
        {initialBookForm.map((item, index) => (
          <label htmlFor={item.id} key={index} className="flex flex-col p-2">
            <span className="text-sm pl-4">{item.label}</span>
            <input
              className="border-2 px-4 py-2 rounded-full"
              {...item}
              onChange={handleInputChange(index)}
            />
          </label>
        ))}
      </div>
      <button onClick={() => console.log(bookForm)}>Click</button>
    </>
  );
};

export default BookForm;
