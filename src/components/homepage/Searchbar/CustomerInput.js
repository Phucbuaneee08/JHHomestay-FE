import { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';

function CustomerInput({ filter }) {
  const dispacth = useDispatch();

  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [baby, setBaby] = useState(0);
  const [pet, setPet] = useState(0);

  const [customerFocus, setCustomerFocus] = useState(false);

  const data = [
    {
      title: "Nguời lớn",
      subtitle: "Từ 13 tuổi trở lên",
      state: adult,
      useState: setAdult
    },
    {
      title: "Trẻ em",
      subtitle: "Độ tuổi 2 - 12",
      state: children,
      useState: setChildren
    },
    {
      title: "Em bé",
      subtitle: "Dưới 2 tuổi",
      state: baby,
      useState: setBaby
    },
    {
      title: "Thú cưng",
      subtitle: "Bạn nên cho Chủ nhà biết nhé",
      state: pet,
      useState: setPet
    }
  ]

  const handleSumbit = () => {
    setCustomerFocus(false);
    dispacth({
      type: 'UPDATE',
      payload: { ...filter, adult, children, baby, pet }
    })
  }

  return (
    <>
      <div 
        className={`
          relative
          flex flex-col justify-center  
          sm:px-4 px-8 
          hover:bg-green-50
          rounded-full
          cursor-pointer
          ${customerFocus ? 'shadow-xl' : ''}
        `}
        onClick={() => setCustomerFocus(true)}
      >
        <h1 className="text-sm font-bold">Khách</h1>
        <p className="text-gray-400">Thêm khách</p>
      </div>
      { 
        customerFocus ? 
        <div
          className="
            absolute
            top-16 right-12
            p-4
            w-80
            bg-white
            rounded-lg
            divide-y-2 divide-green-50
          "
        >
          {
            data.map((item, index) => 
              <div className={`flex justify-between ${index === 0 ? 'mb-2 -mt-2' : 'my-2'}`}>
                <div>
                  <h1 className="font-bold text-lg">{item.title}</h1>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
                <div className="flex items-center">
                  <button className={`${item.state === 0 ? "opacity-10 cursor-not-allowed" : ''}`} onClick={() => item.state > 0 ? item.useState(item.state - 1) : ''}>
                    <MinusCircleIcon className="w-6"/>
                  </button>
                  <span className="mx-3 text-xl">{item.state}</span>
                  <button onClick={() => item.useState(item.state + 1)}>
                    <PlusCircleIcon className="w-6"/>
                  </button>
                </div>
              </div>
            )
          }
        
          <button 
            className="w-full p-2 shadow-md hover:shadow-xl"
            onClick={handleSumbit}
          >Confirm</button>
        </div>
        : ''
      }
    </>
  )
}

export default CustomerInput;