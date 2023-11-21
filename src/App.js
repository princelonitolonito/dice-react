import React, { Component } from "react";
import RollDice from "./RollDice";
import "./Global.css"; // Import the global CSS file
import Clicker from "./Clicker";
import RandomNumber from "./RandomNumber";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDiceGameStart: false,
      isClickerStart: false,
      isRandomNumberStart: false,
    };
    this.handleStartDiceGame = this.handleStartDiceGame.bind(this);
    this.handleStartClicker = this.handleStartClicker.bind(this);
    this.handleStartRandomNumber = this.handleStartRandomNumber.bind(this)
  }

  handleStartDiceGame = () => {
    this.setState({ isDiceGameStart: true });
    this.setState({ isClickerStart: false });
    this.setState({isRandomNumberStart: false})
  };

  handleStartClicker = () => {
    this.setState({ isClickerStart: true });
    this.setState({ isDiceGameStart: false });
    this.setState({isRandomNumberStart: false})
  };

  handleStartRandomNumber = () => {
    this.setState({ isClickerStart: false });
    this.setState({ isDiceGameStart: false });
    this.setState({isRandomNumberStart: true})
  };

  render() {
    return (
      <div>
        <div className="header">
          <div className="header-gap">
            <button onClick={this.handleStartDiceGame}>
              {" "}
              Start Dice Game!
            </button>

            <button onClick={this.handleStartClicker}> Start Clicker! </button>
            <button onClick={this.handleStartRandomNumber}> Random Number! </button>
          </div>
        </div>

        <div>{this.state.isDiceGameStart && <RollDice />}</div>
        <div>{this.state.isClickerStart && <Clicker />}</div>
        <div>{this.state.isRandomNumberStart && <RandomNumber />}</div>
        <div></div>
        <div className="center-cointainer">
          {!this.state.isClickerStart && !this.state.isDiceGameStart && !this.state.isRandomNumberStart &&(<h1>プリンス アプリ！</h1>) }
          
        </div>
        
      </div>
    );
  }
}

export default App;
