import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify'
import {useDispatch} from 'react-redux'

function BookingCard(props) {
    const dispatch = useDispatch()

    const [startOrderDay, setStartOderDay] = useState(new Date());
    const [endOrderDay, setEndOrderDay] = useState(new Date());
    const [countCustomer, setCountCustomer] = useState('0')
    const data = props.homestay
    const HomestayPrice = data.price;
    const { bill } = props

    let [isOpen, setIsOpen] = props.formProp

    var CountOrderDay = 0;
    if (startOrderDay.getTime() < endOrderDay.getTime()) {
        CountOrderDay = Math.round((endOrderDay.getTime() - startOrderDay.getTime()) / (1000 * 3600 * 24));
    }

    function checkdate(startDayChoose, endDayChoose, Start, End) {
        if (((startDayChoose.getTime() >= Start.getTime()) && (startDayChoose.getTime() <= End.getTime())) ||
            ((endDayChoose.getTime() >= Start.getTime()) && (endDayChoose.getTime() <= End.getTime())) ||
            ((Start.getTime() >= startDayChoose.getTime()) && (Start.getTime() <= endDayChoose.getTime())) ||
            ((End.getTime() >= startDayChoose.getTime()) && (End.getTime() <= endDayChoose.getTime()))
        )
            return false

        return true;
    }

    function checkSubmit() {
        console.log(parseInt(countCustomer))
        var check = true;
        for (var i = 0; i < bill.length; i++) {
            if (!checkdate(startOrderDay, endOrderDay, bill.checkinDate, bill.checkoutDate)) {
                check = false;
                break;
            }
        }
        if (startOrderDay.getTime() >= endOrderDay.getTime())
            toast("Vui lòng chọn lại ngày", { type: toast.TYPE.ERROR })
        else
            if (parseInt(countCustomer) <= 0)
                toast("Nhập lại số lượng khách", { type: toast.TYPE.ERROR })
            else
                if (check)
                {
                    dispatch({
                        type: 'GUEST-SET',
                        payload: countCustomer
                    })
                    setIsOpen(true)
                }
                else
                    toast("Đã có khách đặt vào khoảng thời gian đó", { type: toast.TYPE.ERROR })
    }
    const handleInputChange = (e) => {
        console.log(e.target.validity)
        if (e.target.validity.valid)
            setCountCustomer(e.target.value)
    };

    var dayPrice = CountOrderDay * HomestayPrice;
    var servicePirce = 0;
    var totalPirce = dayPrice + servicePirce;


    return (
        <div className>
            <div>
                <div className="border-solid border-2  shadow-xl rounded-xl lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                    <p className="text-center text-xl font-bold text-gray-800 mb-5">
                        {HomestayPrice} VND/đêm
                    </p>
                    <div className="grid grid-cols-2 border rounded-t-xl">
                        <div className="grid grid-rows-2">
                            <label className=" p-3 text-lg font-medium text-gray-800 text-center rounded-tl-xl border">
                                Nhận Phòng
                            </label>
                            <ReactDatePicker
                                className="text-center border rounded-md p-2 px-4 focus:outline-none border-none w-full"
                                minDate={new Date()}
                                selected={startOrderDay}
                                dateFormat="dd/MM/yyyy"
                                onChange={(e) => {
                                    setStartOderDay(e)
                                    console.log(e)
                                }}

                            />
                        </div>

                        <div className="grid grid-rows-2" >

                            <label className="p-3 text-lg font-medium text-gray-800 text-center rounded-tr-xl border items-center">
                                Trả Phòng
                            </label>
                            <ReactDatePicker
                                className="text-center border rounded-md p-2 px-4  focus:outline-none border-none w-full"
                                minDate={startOrderDay}
                                selected={endOrderDay}
                                dateFormat="dd/MM/yyyy"
                                onChange={(e) => setEndOrderDay(e)}
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-end grid grid-rows-2 border rounded-b-xl ">
                        <label className="pl-5 text-lg font-medium text-gray-800 align-baseline mr-2 w-1/3">
                            Khách
                        </label>
                        <input
                            className="pl-5 border-none focus:outline-none text-md font-medium leading-6 text-gray-800 w-2/3 pb-1 pt-3"
                            type="text"
                            name="Số khách"
                            pattern="[0-9]+"
                            value={countCustomer}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mt-8" >
                        <div
                            className="text-sm font-semibold leading-none text-white bg-green-400 border rounded hover:bg-green-600 py-4 w-full text-center"
                            onClick={checkSubmit}>
                            Đặt Homestay
                        </div>
                    </div>
                    <div className="text-center my-4 font-light italic">
                        bạn sẽ không phải thanh toán ngay
                    </div>
                    <div className="grid grid-cols-2 my-2">
                        <div>
                            {HomestayPrice} x {CountOrderDay} đêm
                        </div>
                        <div className="text-right">
                            <p>{dayPrice} VNĐ</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 my-2">
                        <p className="font-bold">Phí Dịch Vụ</p>
                        <div className="text-right">
                            <p>{servicePirce} VNĐ</p>
                        </div>
                    </div>
                    <hr className="border"></hr>
                    <div className="grid grid-cols-2 mt-5 text-lg">
                        <p className="font-bold">Tổng tiền</p>
                        <div className="text-right">
                            <p>{totalPirce} VNĐ</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default BookingCard;