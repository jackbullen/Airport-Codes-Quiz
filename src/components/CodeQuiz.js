// src/components/Quiz.js
import React, { useState } from 'react';
import Question from './Question';
import Answer from './Answer';
import Result from './Result';
import Score from './Score';
import AirportMap from './AirportMap';
const CodeQuiz = ({ data, onQuit }) => {
  const airportCodes = Object.keys(data);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [completed, setCompleted] = useState(0);
  function getRandomIndex() {
    return Math.floor(Math.random() * airportCodes.length);
  }

  const handleAnswerClick = (isCorrect) => {
    setCompleted(completed + 1);
    if (completed === airportCodes.length) {
      setShowResult(true);
    }
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setWrongAnswers([...wrongAnswers, airportCodes[currentQuestion]]);
    }
    const nextQuestion = getRandomIndex();
    if (nextQuestion !== currentQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion((prevQuestion) => (prevQuestion + 1) % airportCodes.length);
    }
  };

  return (
<div className="airport-container">
<button onClick={onQuit} className="quit-button">Quit</button>
  {showResult ? (
    <Result score={score} totalQuestions={airportCodes.length} />
  ) : (
    <div className="airport-question-container">
      <Question airport={data[airportCodes[currentQuestion]]} />
      <Answer
        airportCode={airportCodes[currentQuestion]}
        data={data}
        onAnswerClick={handleAnswerClick}
      />
      <Score score={score} mistakes={wrongAnswers} />
    </div>
  )}
  <div className='map-container'>
    <AirportMap
      key={currentQuestion}
      data={data} 
      airportCodes={airportCodes}
      current={currentQuestion}
    />
  </div>
</div>

  );
};

export default CodeQuiz;
