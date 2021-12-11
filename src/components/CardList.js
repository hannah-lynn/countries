import React from 'react';
import Card from './Card.js';

const CardList = ({ countries }) => {
  console.log(countries);
  return (
    <div>
      {countries.map((country, i) => {
        return (
          <Card
            key={i}
            flag={country.flags.png}
            name={country.name.common}
            capital={country.capital}
          />
        );
      })}
    </div>
  );
};

export default CardList;
