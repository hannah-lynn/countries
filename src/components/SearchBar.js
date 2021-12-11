import React from 'react';

const SearchBar = ({ searchWord, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba bg-light-gray'
        type='search'
        placeholder='search countries'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
