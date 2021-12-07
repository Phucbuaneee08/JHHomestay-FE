import { useState } from "react";

const serviceList = [
    { id: 'service-0',  value: false, label: 'Bếp' },
    { id: 'service-1',  value: false, label: 'Hệ thống sưởi' },
    { id: 'service-2',  value: false, label: 'Điêu hòa nhiệt độ' },
    { id: 'service-3',  value: false, label: 'Máy giặt' },
    { id: 'service-4',  value: false, label: 'Máy sấy quần áo' },
    { id: 'service-5',  value: false, label: 'Wi-fi' },
    { id: 'service-6',  value: false, label: 'Bữa sáng' },
    { id: 'service-7',  value: false, label: 'Lò sưởi trong nhà' },
    { id: 'service-8',  value: false, label: 'Bàn là' },
    { id: 'service-9',  value: false, label: 'Máy sấy tóc' },
    { id: 'service-10', value: false, label: 'Không gian riêng để làm việc' },
    { id: 'service-11', value: false, label: 'TV' },
    { id: 'service-12', value: false, label: 'Cũi' },
    { id: 'service-13', value: false, label: 'Ghế ăn cho trẻ em' },
    { id: 'service-14', value: false, label: 'Tự nhận phòng' },
    { id: 'service-15', value: false, label: 'Máy báo khói' },
    { id: 'service-16', value: false, label: 'Máy phát hiện khí CO' },
    { id: 'service-17', value: false, label: 'Phòng tắm riêng' },
    { id: 'service-18', value: false, label: 'Hương biển' },
    { id: 'service-19', value: false, label: 'Ven sông/hồ/biển' }
]

const Service = () => {
    const [services, setServices] = useState(serviceList);

    const handleCheck = index => () => setServices([
        ...services.slice(0, index),
        {
            ...services[index],
            value: !services[index].value
        },
        ...services.slice(index + 1)
    ])

    return (
        <>
            <div className="border-b p-4">
                <h1 className="text-2xl font-bold mb-4">Tiện nghi</h1>
                <div className="grid grid-cols-2 gap-4">{
                    services.map((item, index) => (
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

export default Service;