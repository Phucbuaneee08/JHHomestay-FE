import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination flex justify-center mb-10 font-semibold'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item flex-row mx-3 my-1 bg-gray-300 rounded-full w-6'>
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