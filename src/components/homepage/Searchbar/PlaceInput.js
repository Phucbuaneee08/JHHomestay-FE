import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function PlaceInput({ filter }) {
  const inputEl = useRef(null);
  const dispacth = useDispatch();
  const [place, setPlace] = useState('');
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    dispacth({
      type: 'UPDATE',
      payload: { ...filter, place }
    })
  }, [place, dispacth]);

  return (
    <div 
      className={`
        px-8 py-2 
        cursor-pointer 
        rounded-full 
        group 
          hover:bg-green-50
        ${focus ? 'shadow-lg' : ''}
      `}
      onClick={() => inputEl.current.focus()}
    >
      <h1 
        className="
          text-sm font-bold
        "
      >
        Địa điểm
      </h1>
      <input 
        className="
          group-hover:bg-green-50 
          focus:outline-none
        "
        type="text"
        ref={inputEl}
        placeholder="Bạn muốn đi đâu?"
        onChange={e => setPlace(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}

export default PlaceInput;