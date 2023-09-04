import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Your Score: {score}/{totalQuestions}</p>
    </div>
  );
};

export default Result;
