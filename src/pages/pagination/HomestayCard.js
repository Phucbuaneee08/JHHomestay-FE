import {StarIcon} from '@heroicons/react/solid'

function HomestayCard (props) {
    const {name, img, type, price, rate, url} = props.detail
    return (
    <div className="shadow-2xl p-4 rounded-2xl cursor-pointer" href={url}>
        <div className="bg-gray-800 h-48 shadow-xl rounded-2xl">
            <img src={img} alt="" className="w-full h-full shadow-xl rounded-2xl"/>
        </div>
        <div className="flex justify-between my-2">
            <p className="flex flex-row">{type}</p>
            <div className="flex flex-row mr-3">
                <p className="">{rate} </p>
                <StarIcon className="w-6 h-auto text-yellow-400"/>
            </div>
        </div>
        <p className="mb-2 font-bold md:text-xl text-base h-auto"> {name}</p>
        <div className="flex mt-2 justify-end">
            <div className="flex flex-row">
                <p className="font-bold mr-1"> {price}</p>
                <p> VND/Ngày</p>
            </div>
        </div>
    </div>
    )
}
export default HomestayCard;