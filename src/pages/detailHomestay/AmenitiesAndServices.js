function AmenitiesAndServices(homestay) {
    const {name}=homestay.detail;
   
    return (
        <div>
            <p className="text-md text-gray-700">{name} </p>           
        </div>
    )
} 

export default AmenitiesAndServices;