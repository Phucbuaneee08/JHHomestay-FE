
import Footer from "../components/Shared/Footer.js"
import Description from "./detailHomestay/Description"
import AmenitiesAndServices from "./detailHomestay/AmenitiesAndServices.js";
import Rates from "./detailHomestay/Rates.js";
import Feedback from "./detailHomestay/Feedback.js";
import BookFormModal from "../components/Detail/BookFormModal";
import React, { useState, useEffect } from 'react';
import axios from "axios";

import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';

function Detail() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            try {
                const {data: response} = await axios.get('http://localhost:8000/homestays/information/61b75d7ac2faceabc5c96d73');
                setData(response.content.homestay)
                console.log(response.content.homestay)
            } 
            catch (error) {
                console.error(error.message);
              }
        }
        fetchData()
    }, [])

    //tính rate trung bình mỗi loại: clean, value, accuracy, service 
    let count=0
    let cleanRate,valueRate, accuracyRate, serviceRate
    if(undefined !== data.rates && data.rates.length){
      count=data.rates.length
      cleanRate = data.rates.reduce((result, {cleanRate}) => result + cleanRate, 0);
      cleanRate/=count;
      valueRate = data.rates.reduce((result, {valueRate}) => result + valueRate, 0);
        valueRate/=count;
      accuracyRate = data.rates.reduce((result, {accuracyRate}) => result + accuracyRate, 0);
        accuracyRate/=count;
      serviceRate = data.rates.reduce((result, {serviceRate}) => result + serviceRate, 0);
        serviceRate/=count;
    } else {
      count=0
      cleanRate=0
      valueRate=0
      accuracyRate=0
      serviceRate=0
    }
    
    const x4cmt = (
      [...Array(4)].map((e, i) => <div className="pr-24">
            {data.rates && data.rates.length ?
            data.rates.map (item => (
                <Feedback detail={item}/>
            )):null}
            </div>
    ))

    return(
      <div>
        <div>
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
        </div>
      
        <div className="h-96 w-full border"> Photos </div>
        <div className=" max-w-9/10 xl:max-w-5/6 mx-auto ">
          <div className="grid grid-cols-5 mt-10 border-b border-gray-300">
            <div className="col-start-1 col-end-4">
                <Description 
                  detail={data} 
                  className="border-b-2 border-gray-300 pb-8" 
                  />

                <div className="border-b border-gray-300 pb-8 pt-8">
                  <p className="text-2xl font-bold ml-3 mb-3"> Tiện nghi có sẵn </p>
                  <div className="grid grid-cols-2">
                    {data.amenities && data.amenities.length ?
                    data.amenities.map (item => (
                      <div className="flex py-1">
                        <AmenitiesAndServices detail={item} className="flex flex-row"/>
                      </div>
                      )):null}
                    
                  </div>
                </div>

                <div className="border-b border-gray-300 pb-8 pt-8">
                  <p className="text-2xl font-bold ml-3 mb-3"> Dịch vụ của Homestay </p>
                  <div className="grid grid-cols-2">
                    {data.generalServices && data.generalServices.length ?
                    data.generalServices.map (item => (
                      <div className="flex py-1">
                        <AmenitiesAndServices 
                          detail={item}
                          className="flex flex-row"
                        />
                      </div>
                      )):null}
                  </div>
                </div>
                
                <div className="pb-8 pt-8">
                  <p className="text-2xl font-bold ml-3 mb-3"> Dịch vụ đặt kèm </p>
                  <div className="grid grid-cols-2">
                    {data.services && data.services.length ?
                    data.services.map (item => (
                      <div className="flex py-1">
                        <BoltOutlinedIcon className="text-gray-900 mr-3 mt-1"/>
                        <p className="text-lg text-gray-900 flex flex-row">
                          {item.name} 
                        </p>
                        
                      </div>
                      )):null}

                  </div>
                </div>

                
            </div>
            
            <div className="col-start-4 col-end-6 ml-32 my-8 border">
                Booking 
            </div>
          </div>
          
          <div className="pb-8 pt-8">
            <div className="flex mb-3">
              <p className="flex flex-row text-2xl font-bold ml-3"> Đánh giá </p>
              <p className="flex flex-row text-lg font-medium mt-1 ml-5">({count*4} đánh giá)</p>
            </div>
            <Rates 
                cleanRate={cleanRate}
                valueRate={valueRate}
                serviceRate={serviceRate}
                accuracyRate={accuracyRate}
              />
            
            <div className="grid grid-cols-2">
              {x4cmt}
            </div> 
          </div>
        </div>
        <Footer />
      </div>
    )
}
export default Detail;