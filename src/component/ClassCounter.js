import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super();
    this.state = { count: 0 };
  }
  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>Class Counter</h1>
        <h3>count: {this.state.count}</h3>
        <button onClick={this.handleIncrease}>increase</button>
        <button onClick={this.handleDecrease}>decrase</button>
      </div>
    );
  }
}

export default ClassCounter;
