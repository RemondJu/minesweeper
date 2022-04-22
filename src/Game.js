import React, { useState } from 'react';
import Row from './Row';

export default function Game () {
  const [gameGrid, setGameGrid] = useState([])
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
    let minesCoordinates = [];
    for (let i = 0; i < gridHeight; i++) {
      generatedGrid.push([]);
      for (let j = 0; j < gridWidth; j++) {
        if (Math.floor(Math.random() * 100) % 4 === 0 && gridMines <= gridMaxMines) {
          gridMines++
          minesCoordinates.push({x: j, y: i});
          generatedGrid[i].push({x: j, y: i, content: 'X'})
        } else {
          generatedGrid[i].push({x: j, y: i, content: 0})
        }
      }
    }

    minesCoordinates.forEach(mineCoordinates => {
      let minX = mineCoordinates.x > 0 ? mineCoordinates.x - 1 : 0
      let maxX = mineCoordinates.x < generatedGrid[0].length - 1 ? mineCoordinates.x + 1 : mineCoordinates.x
      let minY = mineCoordinates.y > 0 ? mineCoordinates.y - 1 : 0
      let maxY = mineCoordinates.y < generatedGrid.length - 1 ? mineCoordinates.y + 1 : mineCoordinates.y
      generatedGrid.forEach((row, rowIndex) => {
        if(rowIndex >= minY && rowIndex <= maxY) {
          row.forEach((square, squareIndex) => {
            if(squareIndex >= minX && squareIndex <= maxX && square.content !== 'X') {
              square.content++;
            }
          })
        }
      })
    });
    setGameGrid(generatedGrid);
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