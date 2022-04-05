import React, { Component } from 'react';
import Square from './Square';

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <div className='Row'>
      {this.props.squares.map(square => 
        <Square 
          key={'square' + square.x + square.y} 
          squareDetails={square}
          gameGrid={this.props.gameGrid}
          mine={square.mine}
          gameOver={this.props.gameOver}
          handleFailedGame={this.props.handleFailedGame}
        />
      )}
    </div>
  }
}

export default Row;