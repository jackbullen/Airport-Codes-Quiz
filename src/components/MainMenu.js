import React from 'react';

const MainMenu = ({ onSelectQuiz }) => {
  return (
    <div className="main-menu">
      <h1>Main Menu</h1>
      
      <button className="main-quiz" onClick={() => onSelectQuiz('CodeQuiz')}>Airport Codes Quiz</button>
      <div className='side-quizzes'>
        <button className="side-quiz" onClick={() => onSelectQuiz('AvionicsQuiz')}>Avionics Quiz</button>
        <button className="side-quiz" onClick={() => onSelectQuiz('AviationQuiz')}>Aviation Quiz</button>
        <button className="side-quiz" onClick={() => onSelectQuiz('AerospaceQuiz')}>Aerospace Quiz</button>
      </div>
      <button className="map-view" onClick={() => onSelectQuiz('MapView')}>View The Map</button>
    </div>
  );
};

export default MainMenu;
