import pointToComment from "../../helpers/pointToComment"
const evaluated = [
    {text:"Perfect", color: "text-green-600", bg: "bg-green-100"},
    {text:"Good", color: "text-blue-600", bg: "bg-blue-100"},
    {text:"Acceptable", color: "text-yellow-600", bg: "bg-yellow-100"},
]
function RecommendedHotelCard (props) {
    const {rating, destination, homestayName, price} = props.detail
    const evaluatedPoint = pointToComment(rating)
    const ratingShow = (
        <div className="flex">
            <div className={`${evaluated[evaluatedPoint].bg} w-10 items-center  text-center rounded-md`}>
                <p className={`font-bold ${evaluated[evaluatedPoint].color}` }>{rating}</p>
            </div>
            <p className={`ml-2 font-bold ${evaluated[evaluatedPoint].color}` }>{evaluated[evaluatedPoint].text}</p>

        </div>
    )
    return (
        <div className="shadow-2xl p-4 rounded-2xl"> 
         <div className="bg-gray-800 h-64 shadow-xl rounded-2xl"></div>
         <p className="my-2 font-bold text-xl"> {homestayName}</p>
         <p className="my-2">{destination}</p>
         <div className="flex justify-between mt-8">
            {ratingShow}
            <div className="flex flex-row">
            <p className="font-bold mr-1"> {price}</p>
            <p> VND/Ngày</p>
            </div>

         </div>
        </div>

    )

}

export default RecommendedHotelCard