import React from 'react';

const Pagination = ({ pokePerPage, totalPoke, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPoke / pokePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} >
            <button className='page' onClick={() => paginate(number)} href='!#' >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;