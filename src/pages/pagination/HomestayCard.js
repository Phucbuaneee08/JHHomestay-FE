function HomestayCard(props) {
    const { name, type, price, averageRates, photos } = props.detail
    return (
        <div className="">
            <div className="bg-gray-800 h-56 2xl:h-72 rounded-2xl">
                <img src={`http://localhost:8000${photos[0].url}`} className="w-full h-full shadow-xl rounded-2xl" />
            </div>
            <p className="mb-2 font-bold md:text-base text-base h-auto truncate my-2"> {name}</p>
            <div className="flex justify-between my-2 flex-row">
                <p className="">{type}</p>
                <div className="flex flex-row">
                    <p className="font-bold mr-1"> {price}</p>
                    <p> VND/ Ngày</p>
                </div>
            </div>
        </div>
    )
}
export default HomestayCard;