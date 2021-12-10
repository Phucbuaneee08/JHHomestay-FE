import { useState } from "react";

const cateList = [ 
    { id: 'cate-0', value: false, label: 'Biệt thự'}, 
    { id: 'cate-0', value: false, label: 'Căn hộ studio'}, 
    { id: 'cate-0', value: false, label: 'Căn hộ chung cư'}, 
    { id: 'cate-0', value: false, label: 'Căn hộ dịch vụ'}, 
    { id: 'cate-0', value: false, label: 'Hotel'}, 
    { id: 'cate-0', value: false, label: 'Nhà riêng'}, 
    { id: 'cate-0', value: false, label: 'Căn hộ'}, 
    { id: 'cate-0', value: false, label: 'Khác'}
];

const Categories = () => {
    const [cate, setCate] = useState(cateList);

    const handleCheck = index => () => setCate([
        ...cate.slice(0, index),
        {
            ...cate[index],
            value: !cate[index].value
        },
        ...cate.slice(index + 1)
    ])

    return (
        <>
            <div className="border-b p-4">
                <h1 className="text-2xl font-bold mb-4">Danh mục</h1>
                <div className="grid grid-cols-2 gap-4">{
                    cate.map((item, index) => (
                        <label className="flex items-center space-x-3">
                            <input type="checkbox" {...item} onClick={handleCheck(index)} className="h-4 w-4"/>
                            <span className="text-gray-900 font-medium">{item.label}</span>
                        </label>
                    ))
                }</div>
            </div>
        </>
    );
}

export default Categories;