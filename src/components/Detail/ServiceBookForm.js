import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";

const serviceName = [
  { name: "Lẩu thái", amount: 0 },
  { name: "Buffet", amount: 0 },
  { name: "Karaoke", amount: 0 },
  { name: "Tiệc mini", amount: 0 },
  { name: "Lẩu hải sản", amount: 0 },
  { name: "BBQ King", amount: 0 },
  { name: "Nướng", amount: 0 },
  { name: "Cơm bình dân", amount: 0 },
  { name: "Gỏi", amount: 0 },
];

const ServiceBookForm = () => {
  const [serviceState, setServiceState] = useState(serviceName);

  const handleAddService = (index, flag) => () => {
    /**
     * flag = true: plus
     * flag = false: minus
     */
    if (flag === false && serviceState[index].amount === 0) return;

    const tempServiceState = [
      ...serviceState.slice(0, index),
      {
        ...serviceState[index],
        amount: serviceState[index].amount + (flag === true ? 1 : -1),
      },
      ...serviceState.slice(index + 1),
    ];
    setServiceState(tempServiceState);
  };

  return (
    <>
      <h1 className="col-start-1 col-end-3 text-lg font-medium border-t">
        Danh mục dịch vụ
      </h1>

      {serviceState.map((item, index) => (
        <div
          className="p-2 px-8 flex items-center justify-between"
          key={index}
        >
          <p className="font-light">{item.name}</p>
          <div className="flex items-center">
            <button
              className={`${
                item.amount === 0 ? "opacity-10 cursor-not-allowed" : ""
              }`}
              onClick={handleAddService(index, false)}
            >
              <MinusCircleIcon className="w-4" />
            </button>
            <span className="mx-2 text-lg font-medium">{item.amount}</span>
            <button onClick={handleAddService(index, true)}>
              <PlusCircleIcon className="w-4" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceBookForm;
