import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FilterModal from '../components/homestay/FilterModal'
import Header from '../components/Shared/Header'
function Homestays() {
    let [isOpen, setIsOpen]= useState(false)

    return(
        <div>
            <Header />
            <div className="flex flex-row item-centers mx-auto py-2 max-w-9/10 justify-between ">
                <h1> Tìm kiếm theo filter</h1>
                <button 
                onClick={() => setIsOpen(true)} 
                className="mx-2 my-2 flex items-center bg-white transition duration-150 ease-in-out hover:border-gray-300 rounded-full border-2 border-gray-200 pl-3 pr-3 py-2 text-sm"
                >
                    <p classNam=""> Bộ lọc</p>
                </button>
            </div>
            <FilterModal openProp={[isOpen, setIsOpen]}/>
            
        </div>
    )
}

export default Homestays