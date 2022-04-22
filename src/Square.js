import React, { useState, useEffect } from 'react';

export default function Square (props) {
  const [content, setContent] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const [className, setClassName] = useState('Square');

  useEffect(() => {
    if (props.gameOver && !isRevealed && content !== 'F') {
      revealContent()
    }
  })

  const revealContent = () => {
    setIsRevealed(true)
    setClassName(className + ' clicked failed')
  }

  // const showNumberOfNeighborMines = () => {
  //   let minX = props.squareDetails.x > 0 ? props.squareDetails.x - 1 : 0
  //   let maxX = props.squareDetails.x < props.gameGrid[0].length - 1 ? props.squareDetails.x + 1 : props.squareDetails.x
  //   let minY = props.squareDetails.y > 0 ? props.squareDetails.y - 1 : 0
  //   let maxY = props.squareDetails.y < props.gameGrid.length - 1 ? props.squareDetails.y + 1 : props.squareDetails.y

  //   let numberOfNeighborMines = 0
  //   props.gameGrid.slice(minY, maxY+1).forEach(function(row) {
  //     row.slice(minX, maxX+1).forEach(function(square) { if (square.mine) {numberOfNeighborMines++} })
  //   });
  //   if (numberOfNeighborMines === 0) {
  //     props.revealEmptyNeighorSquares(props.squareDetails.x, props.squareDetails.y)
  //   }
  // }

  const handleClick = (event) => {
    event.preventDefault();
    if (content !== 'F') {
      setIsRevealed(true);
      if (props.squareDetails.content === 'X') {
        props.handleFailedGame();
      } else {
        setIsRevealed(true);
        setClassName(className + ' clicked');
      }
    }
  }

  const handleRightClick = (event) => {
    event.preventDefault();
    if (!isRevealed &&  !props.gameOver) {
      setContent(content === 'F' ? '' : 'F')
    }
  }

  if (isRevealed) {
    return <div className={className}>{props.squareDetails.content}</div>;
  } else {
    return <div
      className={className}
      onClick={handleClick}
      onContextMenu={handleRightClick}>
        {content}
    </div>;
  }
}