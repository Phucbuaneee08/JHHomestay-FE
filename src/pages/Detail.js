import { useState } from "react";
import BookFormModal from "../components/Detail/BookFormModal";

function Detail() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="
        mx-2 my-2 px-3 py-2
        border-2 border-gray-200 
        rounded-lg
        text-sm
        transition duration-150 ease-in-out 
        hover:border-gray-300"
        onClick={() => setIsOpen(true)}
      >
        Đặt phòng
      </button>
      <BookFormModal openProp={[isOpen, setIsOpen]}/>
    </>
  );
}

export default Detail;
