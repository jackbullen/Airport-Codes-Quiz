import React, { useState } from 'react';

const AvionicsQuiz = ({ data, onQuit }) => {
  const questions = [
    {
      question: 'What does GPS stand for in aviation?',
      options: ['Global Positioning System', 'General Pilot System', 'Ground Plane System'],
      correctAnswer: 'Global Positioning System',
    },
    {
      question: 'Which instrument measures an aircraft’s pitch angle?',
      options: ['Altimeter', 'Attitude Indicator', 'Airspeed Indicator'],
      correctAnswer: 'Attitude Indicator',
    },
    {
      question: 'What is TCAS used for in avionics?',
      options: ['Terrain Caution and Avoidance System', 'Traffic Collision Avoidance System', 'Transponder Calibration and Synchronization'],
      correctAnswer: 'Traffic Collision Avoidance System',
    },
    {
      question: 'What is the purpose of an ILS in aviation?',
      options: ['Inertial Landing System', 'Instrument Landing System', 'Integrated Location Service'],
      correctAnswer: 'Instrument Landing System',
    },
    {
      question: 'What does VOR stand for in aviation?',
      options: ['Vertical Onboard Radar', 'Visual Obstruction Relay', 'VHF Omnidirectional Range'],
      correctAnswer: 'VHF Omnidirectional Range',
    },
    {
      question: 'Which type of communication is used for air traffic control?',
      options: ['AM (Amplitude Modulation)', 'FM (Frequency Modulation)', 'PM (Phase Modulation)'],
      correctAnswer: 'AM (Amplitude Modulation)',
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
    <div className="avionics-quiz">
      <h1>Avionics Quiz</h1>
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

export default AvionicsQuiz;
