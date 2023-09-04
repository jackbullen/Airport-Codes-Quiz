import React from 'react';

function Score({ score, mistakes }) {
  return (
    <div className="score">
    
      <p>Score: {score}</p>
        <p>Mistakes:</p>
        
            {mistakes.map((mistake) => {
                return (
                    mistake === mistakes[0] ? `${mistake}`: `, ${mistake}`
                );
            })}
        
    </div>

  );
}

export default Score;
