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
    return <div className={className}>
      {props.squareDetails.content === 0 ? '' : props.squareDetails.content}
    </div>;
  } else {
    return <div
      className={className}
      onClick={handleClick}
      onContextMenu={handleRightClick}>
        {content}
    </div>;
  }
}