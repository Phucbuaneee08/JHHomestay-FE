import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";
import BookForm from "./BookingForm/BookForm";
import { toast } from "react-toastify";

const initUserInfo = {
  mainCustomerName: "",
  accompanyingCustomerName: [],
  phoneNumber: "",
  identificationNumber: "",
  email: "",
};

const serviceName = [
  { name: "Lẩu thái", pricePerUnit: 300000, amount: 0 },
  { name: "Buffet", pricePerUnit: 1000000, amount: 0 },
  { name: "Karaoke", pricePerUnit: 500000, amount: 0 },
  { name: "Tiệc mini", pricePerUnit: 500000, amount: 0 },
  { name: "Lẩu hải sản", pricePerUnit: 250000, amount: 0 },
  { name: "BBQ King", pricePerUnit: 200000, amount: 0 },
  { name: "Nướng", pricePerUnit: 200000, amount: 0 },
  { name: "Cơm bình dân", pricePerUnit: 50000, amount: 0 },
  { name: "Gỏi", pricePerUnit: 500000, amount: 0 },
];

const BookFormModal = (props) => {
  /* Open state for booking modal */
  const [isOpen, setIsOpen] = props.openProp;
  const closeModal = () => setIsOpen(false);

  const setConfirmState = props.setConfirmState;

  /* User state and Service state for booking modal */
  const [userInfo, setUserInfo] = useState(initUserInfo);
  const [serviceState, setServiceState] = useState(serviceName);

  /* Calculate price */
  const [servicePrice, setServicePrice] = useState(0);
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < serviceState.length; i++)
      sum += serviceState[i].pricePerUnit * serviceState[i].amount;
    setServicePrice(sum);
  }, [serviceState]);

  /**
   * Kiểm tra điều kiện các props bên trong form đã được điền
   * 1. Thông tin liên hệ
   *    a. Họ tên người đặt phòng bắt buộc phải khác undefined
   *    b. Danh sách người đi kèm phải trùng với số người đăng kí bên ngoài => Cần props cha để có thể so sánh, hotfix sau
   *    c. Số điện thoại phải khác undefined,           đã kiểm tra định dạng đầu vào
   *    d. Số chứng minh nhân dân phải khác undefined,  đã kiểm tra định dạng đầu vào
   *    e. Email phải khác undefined,                   CHƯA kiểm tra định dạng đầu vào
   * 2. Danh sách dịch vụ có thể không cần chọn
   */
  const handleCloseModal = () => {
    if (userInfo.mainCustomerName === "") {
      toast("Tên người đặt phòng không thể bỏ trống", {
        type: toast.TYPE.ERROR,
      });
      return;
    }

    // Uncomment sau khi đã truyền props số lượng hàng khách vào
    // if (userInfo.accompanyingCustomerName.length !== so_luong_khach_di_kem) {
    //   toast("Số lượng hành khách không khớp với khai báo", {
    //     type: toast.TYPE.ERROR,
    //   });
    //   return;
    // }

    if (userInfo.phoneNumber === "") {
      toast("Số điện thoại không thể bỏ trống", {
        type: toast.TYPE.ERROR,
      });
      return;
    }

    if (userInfo.identificationNumber === "") {
      toast("Số chứng minh nhân dân không thể bỏ trống", {
        type: toast.TYPE.ERROR,
      });
      return;
    }

    if (userInfo.email === "") {
      toast("Email không thể bỏ trống", {
        type: toast.TYPE.ERROR,
      });
      return;
    }

    if (
      !userInfo.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      toast("Email không phù hợp", {
        type: toast.TYPE.ERROR,
      });
      return;
    }

    setIsOpen(false);
    setConfirmState(true);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-filter backdrop-blur-sm"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block max-w-2xl w-2/3 p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="relative">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-gray-900 text-center"
                  >
                    Đặt phòng
                  </Dialog.Title>
                  <button
                    className="absolute top-0 left-0 rounded-full transition ease-in-out duration-400 hover:bg-gray-200"
                    onClick={closeModal}
                  >
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>

                <div className="my-4 border-t border-b max-h-xl overflow-y-scroll overflow-x-hidden">
                  <BookForm
                    userProps={[userInfo, setUserInfo]}
                    serviceProps={[serviceState, setServiceState]}
                  />
                </div>

                <div className="text-center">
                  <button
                    onClick={handleCloseModal}
                    className="inline-flex justify-center px-4 py-2 text-md font-bold text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    {servicePrice === 0 ? "Xác nhận" : `${servicePrice}đ`}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BookFormModal;
