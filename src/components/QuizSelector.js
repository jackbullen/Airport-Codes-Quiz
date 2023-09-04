import React from 'react';
import AvionicsQuiz from './AvionicsQuiz';
import AviationQuiz from './AviationQuiz';
import AerospaceQuiz from './AerospaceQuiz';
import CodeQuiz from './CodeQuiz';
import WholeMap from './WholeMap';

const QuizSelector = ({ selectedQuiz, data, onQuit }) => {
  switch (selectedQuiz) {
    case 'CodeQuiz':
      return <CodeQuiz data={data} onQuit={onQuit} />;
    case 'AvionicsQuiz':
      return <AvionicsQuiz data={data} onQuit={onQuit} />;
    case 'AviationQuiz':
      return <AviationQuiz data={data} onQuit={onQuit} />;
    case 'AerospaceQuiz':
      return <AerospaceQuiz data={data} onQuit={onQuit} />;
    case 'MapView':
      return <WholeMap data={data} onQuit={onQuit} />;
    default:
      return null;
  }
};

export default QuizSelector;