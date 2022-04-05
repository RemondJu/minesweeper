import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      className: 'Square',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleClick() {
    if (this.state.content !== 'F') {
      let newContent = this.props.mine ? 'X' : '';
      this.setState({
        content: newContent,
        className: 'SquareClicked',
      })
    }
  }

  handleRightClick(e) {
    e.preventDefault();
    let newContent = '';
    if (this.state.className !== 'SquareClicked') {
      newContent = this.state.content === 'F' ? '' : 'F';
      this.setState({content: newContent, className: 'Square',})
    }
  }

  render () {
    return <div className={this.state.className} onClick={this.handleClick} onContextMenu={this.handleRightClick}>{this.state.content}</div>;
  }
}

export default Square;