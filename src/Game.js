import React from 'react';
import Row from './Row';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameGrid: [
        [
          {x: 0, y: 0, mine: true},
          {x: 1, y: 0, mine: false},
          {x: 2, y: 0, mine: true},
        ],
        [
          {x: 0, y: 1, mine: true},
          {x: 1, y: 1, mine: false},
          {x: 2, y: 1, mine: false},
        ],
        [
          {x: 0, y: 2, mine: false},
          {x: 1, y: 2, mine: false},
          {x: 2, y: 2, mine: true},
        ]
      ]
    }
  }

  render () {
    return <div className='gameGrid'>
      {this.state.gameGrid.map((el, index) => <Row key={index} squares={el} />)}
      
    </div>;
  }
}

export default Game;