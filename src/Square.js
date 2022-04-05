import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      isClicked: false,
      className: 'Square',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  componentDidUpdate() {
    if (this.props.gameOver && !this.state.isClicked && this.state.content !== 'F') {
      this.revealContent()
    }
  }

  revealContent() {
    this.setState({
      content: this.props.mine ? 'X' : '',
      isClicked: true,
      className: this.state.className + ' clicked failed',
    })
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.content !== 'F') {
      if (this.props.mine) {
        this.props.handleFailedGame();
      } else {
        let minX = this.props.squareDetails.x > 0 ? this.props.squareDetails.x - 1 : 0
        let maxX = this.props.squareDetails.x < this.props.gameGrid[0].length - 1 ? this.props.squareDetails.x + 1 : this.props.squareDetails.x
        let minY = this.props.squareDetails.y > 0 ? this.props.squareDetails.y - 1 : 0
        let maxY = this.props.squareDetails.y < this.props.gameGrid.length - 1 ? this.props.squareDetails.y + 1 : this.props.squareDetails.y

        let numberOfNeighborMines = 0
        this.props.gameGrid.slice(minY, maxY+1).forEach(function(row) {
          row.slice(minX, maxX+1).forEach(function(square) { if (square.mine) {numberOfNeighborMines++} })
        });

        this.setState({
          content: numberOfNeighborMines > 0 ? numberOfNeighborMines : '',
          isClicked: true,
          className: this.state.className + ' clicked',
        })
      }
    }
  }

  handleRightClick(e) {
    e.preventDefault();
    if (!this.state.isClicked) {
      this.setState({content: this.state.content === 'F' ? '' : 'F'})
    }
  }

  render () {
    return <div className={this.state.className} onClick={this.handleClick} onContextMenu={this.handleRightClick}>{this.state.content}</div>;
  }
}

export default Square;