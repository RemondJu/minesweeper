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
      ],
      gameOver: false,
    }

    this.handleFailedGame = this.handleFailedGame.bind(this)
  }

  handleFailedGame() {
    this.setState({gameOver: true})
  }

  render () {
    return <div className='gameGrid'>
      {this.state.gameGrid.map((el, index) => 
        <Row
          key={'row' + index}
          squares={el}
          handleFailedGame={this.handleFailedGame}
          gameOver={this.state.gameOver}
        />
      )}
      
    </div>;
  }
}

export default Game;