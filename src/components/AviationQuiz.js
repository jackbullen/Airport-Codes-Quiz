import React, { useState } from 'react';

const AviationQuiz = ({ data, onQuit }) => {
  const questions = [
    {
      question: 'What are the four fundamental forces of flight?',
      options: ['Lift, Weight, Thrust, Drag', 'Gravity, Wind, Friction, Lift', 'Power, Resistance, Gravity, Buoyancy'],
      correctAnswer: 'Lift, Weight, Thrust, Drag',
    },
    {
      question: 'Which part of an aircraft generates lift?',
      options: ['Wings', 'Engine', 'Tail', 'Fuselage'],
      correctAnswer: 'Wings',
    },
    {
      question: 'What is the purpose of flaps on an aircraft?',
      options: ['To control altitude', 'To increase speed', 'To reduce drag and increase lift during takeoff and landing', 'To steer the aircraft'],
      correctAnswer: 'To reduce drag and increase lift during takeoff and landing',
    },
    {
      question: 'What is the term for the angle between the wings chord line and the oncoming air?',
      options: ['Pitch angle', 'Roll angle', 'Yaw angle', 'Angle of Attack (AoA)'],
      correctAnswer: 'Angle of Attack (AoA)',
    },
    {
      question: 'Which type of aircraft is designed for vertical takeoff and landing (VTOL)?',
      options: ['Helicopter', 'Glider', 'Jetliner', 'Blimp'],
      correctAnswer: 'Helicopter',
    },
    {
      question: 'What is the purpose of an aircrafts rudder?',
      options: ['To control pitch', 'To control roll', 'To control yaw', 'To control speed'],
      correctAnswer: 'To control yaw',
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
    <div className="aviation-quiz">
      <h1>Aviation Quiz</h1>
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

export default AviationQuiz;
