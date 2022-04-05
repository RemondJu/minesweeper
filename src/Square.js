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

  handleClick() {
    if (this.state.content !== 'F') {
      if (this.props.mine) {
        this.props.handleFailedGame();
      } else {
        // TODO neighor mines number logic
        let newContent = '';
        this.setState({
          content: newContent,
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