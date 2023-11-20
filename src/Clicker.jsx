import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      showRoach: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var prevNum = this.state.num + 1;
    this.setState({ num: prevNum });
    this.setState({ showRoach: true });

    setTimeout(() => {
      this.setState({ showRoach: false });
    }, 1000); // Adjust the duration of the spin
  }

  render() {
    return (
      <div className="center-cointainer">
        <div className="flex-container">
          <h1>Clicker!</h1>
          <h1>{this.state.num}</h1>
          <button onClick={this.handleClick}>Click Me</button>
        </div>
        {this.state.showRoach && <img src="https://media.tenor.com/9u7zZ82akxcAAAAi/cockroachdance-cockroach.gif"></img>}
      </div>
    );
  }
}

export default Clicker;
