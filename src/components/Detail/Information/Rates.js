function Rates({cleanRate, serviceRate, valueRate, accuracyRate}) {
    return (
        <div className="grid grid-cols-2">
            <span className="flex justify-between pr-24">
                <p className="flex flex-row text-lg text-gray-800">Mức độ sạch sẽ </p>
                <p className="flex flex-row"> {cleanRate}</p>
            </span>
            <span className="flex justify-between pr-24">
                <p className="flex flex-row text-lg text-gray-800"> Chất lượng dịch vụ </p>
                <p className="flex flex-row"> {serviceRate}</p>
            </span>            
            <span className="flex justify-between pr-24">
                <p className="flex flex-row text-lg text-gray-800"> Giá cả hợp lý </p>
                <p className="flex flex-row"> {valueRate}</p>
            </span>
            <span className="flex justify-between pr-24">
                <p className="flex flex-row text-lg text-gray-800"> Vị trí chính xác </p>
                <p className="flex flex-row"> {accuracyRate}</p>
            </span>
        </div>
    
    )
}

export default Rates;