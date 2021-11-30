import { SearchIcon } from "@heroicons/react/outline";
import IntroTitle from "./IntroTitle";
import PlaceInput from "./PlaceInput";
import DatetimeInput from "./DatetimeInput";
import CustomerInput from "./CustomerInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const defaultData = {
  place: '',
  from: '',
  to: '',
  adult: -1,
  children: -1,
  baby: -1,
  pet: -1
}

function SearchBar() {
  const [data, setData] = useState(defaultData);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({
      type: 'UPDATE',
      payload: data
    });
  }

  const getData = (dataInput) => {
    setData({ ...data, ...dataInput });
  }

  return (
    <>
      <div className="container mx-auto pb-32 w-11/12 h-screen flex flex-col items-center justify-center">
        <IntroTitle/>
        <div className="relative w-auto flex bg-white rounded-full">
          <PlaceInput getData={getData}/>
          <DatetimeInput getData={getData}/>
          <CustomerInput getData={getData}/>
          <button 
            className="flex justify-center flex-col sm:px-4 px-8 hover:bg-green-50 focus:shadow-xl rounded-full"
            onClick={handleSubmit}
          >  
            <SearchIcon className="w-6 h-6"/>
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchBar;