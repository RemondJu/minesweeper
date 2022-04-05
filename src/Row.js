import React, { Component } from 'react';
import Square from './Square';

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <div className='Row'>
      {this.props.squares.map(square => <Square key={square.x + square.y} mine={square.mine} />)}
    </div>
  }
}

export default Row;