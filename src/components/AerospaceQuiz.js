import React, { useState } from 'react';

const AerospaceQuiz = ({ data, onQuit }) => {
  const questions = [
    {
      question: 'What is the primary focus of aerospace engineering?',
      options: [
        'Designing and building aircraft',
        'Exploring outer space',
        'Studying the Earth\'s atmosphere',
        'Designing and developing aircraft, spacecraft, and related systems',
      ],
      correctAnswer: 'Designing and developing aircraft, spacecraft, and related systems',
    },
    {
      question: 'What is the term for the estimation of an aircraft\'s weight, balance, and performance characteristics?',
      options: ['Aerodynamics', 'Aeroelasticity', 'Aircraft Stability', 'Aircraft Preliminary Design'],
      correctAnswer: 'Aircraft Preliminary Design',
    },
    {
      question: 'Which aerospace concept deals with the study of how aircraft structures react to aerodynamic forces?',
      options: ['Aerodynamic Design', 'Structural Analysis', 'Spacecraft Propulsion', 'Aerospace Materials'],
      correctAnswer: 'Structural Analysis',
    },
    {
      question: 'In aerospace, what does "flight envelope" refer to?',
      options: ['A protective covering for spacecraft', 'A range of altitudes for aviation', 'Aircraft engine performance', 'A range of conditions within which an aircraft can safely operate'],
      correctAnswer: 'A range of conditions within which an aircraft can safely operate',
    },
    {
      question: 'What is the primary force that enables an aircraft to stay aloft?',
      options: ['Thrust', 'Weight', 'Drag', 'Lift'],
      correctAnswer: 'Lift',
    },
    {
      question: 'Which field of aerospace engineering focuses on the propulsion systems of aircraft and spacecraft?',
      options: ['Aerodynamics', 'Avionics', 'Propulsion', 'Orbital Mechanics'],
      correctAnswer: 'Propulsion',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    }
  };

  return (
    <div className="aerospace-quiz">
      <h1>Aerospace Quiz</h1>
      {currentQuestion < questions.length && (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className='side-question-container'>
            {questions[currentQuestion].options.map((option, index) => (
                <div className="question-container">
                  <button className="button" onClick={() => handleAnswerClick(option)}>{option}</button>
                </div>

            ))}
          </div>
          <button className="quit-button" onClick={onQuit}>Quit</button>
        </div>
      )}
    </div>
  );
};

export default AerospaceQuiz;
