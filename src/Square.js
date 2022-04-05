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

  handleClick() {
    if (this.state.content !== 'F') {
      let newContent = this.props.mine ? 'X' : '';
      this.setState({
        content: newContent,
        isClicked: true,
        className: this.state.className + ' clicked',
      })
    }
  }

  handleRightClick(e) {
    e.preventDefault();
    let newContent = '';
    if (!this.state.isClicked) {
      newContent = this.state.content === 'F' ? '' : 'F';
      this.setState({content: newContent})
    }
  }

  render () {
    return <div className={this.state.className} onClick={this.handleClick} onContextMenu={this.handleRightClick}>{this.state.content}</div>;
  }
}

export default Square;