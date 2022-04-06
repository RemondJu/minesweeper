import React from 'react';
import Square from './Square';

export default function Row (props) {
  return <div className='Row'>
    {props.squares.map(square => 
      <Square 
        key={'square' + square.x + square.y} 
        squareDetails={square}
        gameGrid={props.gameGrid}
        mine={square.mine}
        gameOver={props.gameOver}
        handleFailedGame={props.handleFailedGame}
        revealEmptyNeighorSquares={props.revealEmptyNeighorSquares}
      />
    )}
  </div>
}