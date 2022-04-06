import React, { useState, useEffect } from 'react';
import Row from './Row';

export default function Game () {
  const [gameGrid, setGameGrid] = useState(
    [
      [
        {x: 0, y: 0, mine: true},
        {x: 1, y: 0, mine: false},
        {x: 2, y: 0, mine: true},
        {x: 3, y: 0, mine: true},
        {x: 4, y: 0, mine: true},
        {x: 5, y: 0, mine: true},
      ],
      [
        {x: 0, y: 1, mine: true},
        {x: 1, y: 1, mine: false},
        {x: 2, y: 1, mine: false},
        {x: 3, y: 1, mine: false},
        {x: 4, y: 1, mine: false},
        {x: 5, y: 1, mine: false},
      ],
      [
        {x: 0, y: 2, mine: false},
        {x: 1, y: 2, mine: false},
        {x: 2, y: 2, mine: true},
        {x: 3, y: 2, mine: true},
        {x: 4, y: 2, mine: true},
        {x: 5, y: 2, mine: true},
      ],
      [
        {x: 0, y: 3, mine: false},
        {x: 1, y: 3, mine: false},
        {x: 2, y: 3, mine: false},
        {x: 3, y: 3, mine: false},
        {x: 4, y: 3, mine: false},
        {x: 5, y: 3, mine: false},
      ],
      [
        {x: 0, y: 4, mine: false},
        {x: 1, y: 4, mine: false},
        {x: 2, y: 4, mine: true},
        {x: 3, y: 4, mine: true},
        {x: 4, y: 4, mine: true},
        {x: 5, y: 4, mine: true},
      ]
    ]
  )
  const [gameOver, setGameOver] = useState(false)
  const handleFailedGame = () => setGameOver(true);

  return <div className='gameGrid'>
    {gameGrid.map((el, index) => 
      <Row
        key={'row' + index}
        squares={el}
        gameGrid={gameGrid}
        handleFailedGame={handleFailedGame}
        gameOver={gameOver}
      />
    )}
  </div>;
}