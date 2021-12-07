import { useState } from "react";

const amenityList = [
    { id: 'amenity-0',  value: false, label: 'Chỗ đỗ xe miễn phí tại nơi ở' },
    { id: 'amenity-0',  value: false, label: 'Phòng tập thể hình' },
    { id: 'amenity-0',  value: false, label: 'Bồn tắm nước nóng' },
    { id: 'amenity-0',  value: false, label: 'Bể bơi' },
    { id: 'amenity-0',  value: false, label: 'Thiết bị sạc xe điện' },
]

const Amenity = () => {
    const [amenities, setAmenities] = useState(amenityList);

    const handleCheck = index => () => setAmenities([
        ...amenities.slice(0, index),
        {
            ...amenities[index],
            value: !amenities[index].value
        },
        ...amenities.slice(index + 1)
    ])

    return (
        <>
            <div className="border-b p-4">
                <h1 className="text-2xl font-bold mb-4">Tiện ích</h1>
                <div className="grid grid-cols-2 gap-4">{
                    amenities.map((item, index) => (
                        <label className="flex items-center space-x-3">
                            <input type="checkbox" {...item} onClick={handleCheck(index)} className="h-4 w-4"/>
                            <span className="text-gray-900 font-medium">{item.label}</span>
                        </label>
                    ))
                }</div>
            </div>
        </>
    )
}

export default Amenity;