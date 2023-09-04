// src/App.js
import React, { useState } from 'react';
import './App.css';
import airportData from './data/Airports.json';
import QuizSelector from './components/QuizSelector';
import MainMenu from './components/MainMenu';
import WholeMap from './components/WholeMap';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const handleSelectQuiz = (quizName) => {
    setSelectedQuiz(quizName);
    setShowMap(false);
  };

  const handleShowMap = () => {
    setSelectedQuiz(null);
    setShowMap(true);
  };

  const handleQuit = () => {
    setSelectedQuiz(null);
    setShowMap(false);
  };

  return (
    <div className="app-container">
      <h1 className="app-header">Learning Aerospace</h1>
      {selectedQuiz ? (
        <QuizSelector selectedQuiz={selectedQuiz} data={airportData} onQuit={handleQuit} />
      ) : showMap ? (
        <WholeMap />
      ) : (
        <MainMenu
          onSelectQuiz={handleSelectQuiz}
          onShowMap={handleShowMap}
        />
      )}
    </div>

  );
}

export default App;
