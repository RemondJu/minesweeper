import React, { useState, useEffect } from 'react';

export default function Square (props) {
  const [content, setContent] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [className, setClassName] = useState('Square');

  useEffect(() => {
    if (props.gameOver && !isClicked && content !== 'F') {
      revealContent()
    }
  })

  const revealContent = () => {
    setContent(props.mine ? 'X' : '');
    setIsClicked(true)
    setClassName(className + ' clicked failed')
  }

  const showNumberOfNeighborMines = () => {
    let minX = props.squareDetails.x > 0 ? props.squareDetails.x - 1 : 0
    let maxX = props.squareDetails.x < props.gameGrid[0].length - 1 ? props.squareDetails.x + 1 : props.squareDetails.x
    let minY = props.squareDetails.y > 0 ? props.squareDetails.y - 1 : 0
    let maxY = props.squareDetails.y < props.gameGrid.length - 1 ? props.squareDetails.y + 1 : props.squareDetails.y

    let numberOfNeighborMines = 0
    props.gameGrid.slice(minY, maxY+1).forEach(function(row) {
      row.slice(minX, maxX+1).forEach(function(square) { if (square.mine) {numberOfNeighborMines++} })
    });
    if (numberOfNeighborMines === 0) {
      props.revealEmptyNeighorSquares(props.squareDetails.x, props.squareDetails.y)
    }

    setContent(numberOfNeighborMines > 0 ? numberOfNeighborMines : '');
    setIsClicked(true);
    setClassName(className + ' clicked');
  }

  const handleClick = (event) => {
    event.preventDefault();
    if (content !== 'F') {
      if (props.mine) {
        props.handleFailedGame();
      } else {
        showNumberOfNeighborMines()
        props.revealEmptyNeighorSquares()
      }
    }
  }

  const handleRightClick = (event) => {
    event.preventDefault();
    if (!isClicked) {
      setContent(content === 'F' ? '' : 'F')
    }
  }

  return <div
      className={className}
      onClick={handleClick}
      onContextMenu={handleRightClick}>
        {content}
    </div>;
}