import { useState, useRef } from 'react';

function PlaceInput({ getData }) {
  const inputEl = useRef(null);
  const [place, setPlace] = useState('');
  const [focus, setFocus] = useState(false);

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
        onBlur={() => {
          setFocus(false);
          getData({ place });
        }}
      />
    </div>
  )
}

export default PlaceInput;