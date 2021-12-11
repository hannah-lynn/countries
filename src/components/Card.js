import React from 'react';

const Card = ({ flag, name, capital }) => {
  return (
    <div className='bg-light-gray tc dib br3 pa3 ma2 grow bw2 shadow-5 w-30'>
      <img src={flag} alt='flag' />
      <div>
        <h2>{name}</h2>
        <p>{capital}</p>
      </div>
    </div>
  );
};

export default Card;
