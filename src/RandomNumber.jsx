import React, { Component } from "react";

class RandomNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let rand = Math.floor(Math.random() * 100) + 1;
    this.setState({ num: rand });
  }

  render() {
    return (
      <div className="center-cointainer">
        <div className="flex-container">
          <h1>Random Number!</h1>
          <h1>{this.state.num}</h1>
          <button onClick={this.handleClick}>Random!</button>
        </div>
      </div>
    );
  }
}

export default RandomNumber;
