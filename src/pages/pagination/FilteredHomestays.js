import React from 'react';
import HomestayCard from './HomestayCard';

const FilteredHomestays = ({homestay}) => {
  return (
    <div className='container mt-5 mx-auto mb-16'>
      <ul className='container mb-16 grid grid-cols-4 gap-10 mt-5 justify-between mx-auto'>
        {homestay.map(props => (     
          <HomestayCard detail={props}/>       
        ))}
      </ul>
    </div>
  );
};

export default FilteredHomestays;