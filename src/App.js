import React, { Component } from "react";
import RollDice from "./RollDice";
import "./Global.css"; // Import the global CSS file
import Clicker from "./Clicker";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDiceGameStart: false,
      isClickerStart: false,
     
    };
    this.handleStartDiceGame = this.handleStartDiceGame.bind(this);
    this.handleStartClicker = this.handleStartClicker.bind(this);
  }

  handleStartDiceGame = () => {
    this.setState({ isDiceGameStart: true });
    this.setState({ isClickerStart: false });
  };

  handleStartClicker = () => {
    this.setState({ isClickerStart: true });
    this.setState({ isDiceGameStart: false });
  };

  render() {
    return (
      <div>
        <div className="header">
          
        {!this.state.isDiceGameStart && (
          <button onClick={this.handleStartDiceGame}> Start Dice Game!</button>
        )}

        {!this.state.isClickerStart && (
          <button onClick={this.handleStartClicker}> Start Clicker! </button>
        )}

        </div>
       
        <div>{this.state.isDiceGameStart && <RollDice />}</div>
        <div>{this.state.isClickerStart && <Clicker />}</div>
      </div>
    );
  }
}

export default App;
