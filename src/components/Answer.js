// src/components/Answer.js
import React from 'react';

const Answer = ({ airportCode, data, onAnswerClick }) => {
  const currentAirport = data[airportCode];
  const stationsInSameGroup = Object.keys(data).filter(
    (code) => data[code].group === currentAirport.group && code !== 'NaN'
  );

  return (
<div>
  <ul className="button-container">
    {stationsInSameGroup.map((stationCode) => {
      return (
        <div key={stationCode}>
          <button
            onClick={() => onAnswerClick(stationCode === airportCode)}
            className="button"
          >
            {stationCode}
          </button>
        </div>
      );
    })}
  </ul>
</div>


  );
};

export default Answer;
