import {useEffect} from 'react'

import RecommendedHotelCard from "./RecommendedHotelCard"

const seedHomestay = [
    {imageURL: "", homestayName: "homestay 1", rating: 5, price:100000, destination:"helloworld" },
    {imageURL: "", homestayName: "homestay2", rating: 4.6, price:100000, destination:"helloworld" },
    {imageURL: "", homestayName: "homestay3", rating: 5, price:100000, destination:"helloworld" },
    {imageURL: "", homestayName: "homestay4", rating: 5, price:100000, destination:"helloworld" },
]


function RecommendedHotelWrapper () {
    useEffect(() => {


    }, [])
    return (
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8"> 
            {seedHomestay.map(homestay => <RecommendedHotelCard detail={homestay} />)}
        </div>
    )

}

export default RecommendedHotelWrapper