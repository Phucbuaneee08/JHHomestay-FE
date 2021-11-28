import { SearchIcon } from "@heroicons/react/outline";
import IntroTitle from "./IntroTitle";
import PlaceInput from "./PlaceInput";
import DatetimeInput from "./DatetimeInput";
import CustomerInput from "./CustomerInput";

function SearchBar() {
  return (
    <>
      <div className="container mx-auto pb-32 w-11/12 h-screen flex flex-col items-center justify-center">
        <IntroTitle/>
        <div className="relative w-auto flex bg-white rounded-full">
          <PlaceInput/>
          <DatetimeInput/>
          <CustomerInput/>
          <button className="flex justify-center flex-col sm:px-4 px-8 hover:bg-green-50 focus:shadow-xl rounded-full">
            <SearchIcon className="w-6 h-6"/>
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchBar;