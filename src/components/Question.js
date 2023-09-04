import React from 'react';

const Question = ({ airport }) => {
  return (
<div className="airport-question">
  <h2 className="text-3xl airport-question-title">
    What is the airport code for:
  </h2>
  <p className="airport-question-details">
    {airport.city}, {airport.prov}
  </p>
</div>
  );
};

export default Question;
