import React from 'react';

const Pagination = ({totalPages, paginate}) => {
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination flex justify-center font-semibold'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item flex-row mx-2 my-1 bg-gray-300 rounded-full w-6 hover:bg-gray-400'>
            <a onClick={() => paginate(number)} href="javascript:void(0)" className='page-link ml-2'>
              {number} 
            </a>
          </li>
        ))}
        
      </ul>
    </nav>
  );
};

export default Pagination;