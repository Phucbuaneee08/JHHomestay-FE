import FilteredHomestays from "./pagination/FilteredHomestays"
import Pagination from "./pagination/Pagination"
import React, { useState} from 'react';

const listHomestays=[
    [
        {"name":"Homestay 1", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 2", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 3", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 4", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 5", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 6", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 7", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 8", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 9", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 10", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 11", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 12", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 13", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 14", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 15", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 16", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"}
    ],
    [
        {"name":"Homestay 17", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 18", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 19", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 20", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 21", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"},
        {"name":"Homestay 22", "img":"https://i.pinimg.com/564x/aa/8d/63/aa8d63b5ca82a8d83360ec4072e2412e.jpg", "price":1000000, "type":"1 Phòng ngủ", "averageRates":5.0, "href":"#"}
    ]
]

function Homestays() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage=2;
    const totalHomestay=22;

    // Chọn page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const currentHomestays = listHomestays[currentPage-1];    //list các Homestays ở trang hiện tại

    return(
        <div className="max-w-9/10 mx-auto py-2">
            <p className="text-xl font-semibold"> Có {totalHomestay} homestays phù hợp với bạn </p>
            <FilteredHomestays homestay={currentHomestays}/>
            <Pagination
                totalPages={totalPage}
                paginate={paginate}
               
            />
            <p className="justify-center mb-10 text-center"> Page {currentPage} of {totalPage}</p>
        </div>
    )
}

export default Homestays