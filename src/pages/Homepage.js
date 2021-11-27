import HomepageHeader from "../components/homepage/HomepageHeader"
import RecommendedHotelWrapper from "../components/homepage/RecommendHotelWrapper"
function Homepage() {
    return(
        <div classnName="bg-gray-200">
            <HomepageHeader />
            <div className="w-full max-w-3/4 md:max-w-5/6 mx-auto">
                <p className="text-4xl font-bold mt-5  ">Top rating</p>
                <p className="text-2xl mt-3">Subcontent</p>
            </div>
            <div className="w-full max-w-3/4 md:max-w-5/6 mx-auto">
                <RecommendedHotelWrapper />
            </div>
            <div className="h-96">

            </div>
             
        </div>
    )
}

export default Homepage