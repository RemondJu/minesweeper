import React, { useState, useEffect } from 'react';
import Row from './Row';

export default function Game () {
  const [gameGrid, setGameGrid] = useState(
    [
      [
        {x: 0, y: 0, mine: false},
        {x: 1, y: 0, mine: false},
        {x: 2, y: 0, mine: false},
        {x: 3, y: 0, mine: false},
        {x: 4, y: 0, mine: false},
        {x: 5, y: 0, mine: false},
      ],
      [
        {x: 0, y: 1, mine: false},
        {x: 1, y: 1, mine: true},
        {x: 2, y: 1, mine: false},
        {x: 3, y: 1, mine: false},
        {x: 4, y: 1, mine: true},
        {x: 5, y: 1, mine: false},
      ],
      [
        {x: 0, y: 2, mine: true},
        {x: 1, y: 2, mine: true},
        {x: 2, y: 2, mine: true},
        {x: 3, y: 2, mine: true},
        {x: 4, y: 2, mine: true},
        {x: 5, y: 2, mine: true},
      ],
      [
        {x: 0, y: 3, mine: false},
        {x: 1, y: 3, mine: true},
        {x: 2, y: 3, mine: false},
        {x: 3, y: 3, mine: false},
        {x: 4, y: 3, mine: true},
        {x: 5, y: 3, mine: false},
      ],
      [
        {x: 0, y: 4, mine: false},
        {x: 1, y: 4, mine: false},
        {x: 2, y: 4, mine: false},
        {x: 3, y: 4, mine: false},
        {x: 4, y: 4, mine: false},
        {x: 5, y: 4, mine: false},
      ]
    ]
  )
  const [gameOver, setGameOver] = useState(false);
  const [gridWidth, setGridWidth] = useState(9);
  const [gridHeight, setGridHeight] = useState(6);
  const [gridMaxMines, setGridMaxMines] = useState(8);
  const handleFailedGame = () => setGameOver(true);
  const revealEmptyNeighorSquares = (x, y) => {
    // TODO reveal empty neighor Squares given clicked Square position
  };
  const generateGameGrid = (e) => {
    e.preventDefault()
    let generatedGrid = [];
    let gridMines = 0;
    for (let i = 0; i < gridHeight; i++) {
      generatedGrid.push([]);
      for (let j = 0; j < gridWidth; j++) {
        if (Math.floor(Math.random() * 100) % 4 === 0 && gridMines <= gridMaxMines) {
          gridMines++
          generatedGrid[i].push({x: j, y: i, content: 'X'})
        } else {
          generatedGrid[i].push({x: j, y: i})
        }
      }
    }
  }

  if (gameGrid.length) {
    return <div className='gameGrid'>
      <button onClick={generateGameGrid}>New game</button>
      {gameGrid.map((row, index) => 
        <Row
          key={'row' + index}
          row={row}
          gameGrid={gameGrid}
          handleFailedGame={handleFailedGame}
          revealEmptyNeighorSquares={revealEmptyNeighorSquares}
          gameOver={gameOver}
        />
      )}
    </div>;
  } else {
    return <div className='gameGrid'>
      <button onClick={generateGameGrid}>Start game</button>
    </div>

  }
}