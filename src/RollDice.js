import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: faDiceOne,
      dice2: faDiceOne,
      isSpinning: false,
      diceState: "Roll",
    };
    this.handleClick = this.handleClick.bind(this);
    this.roll = this.roll.bind(this);
  }

  handleClick() {
    
    this.setState({isSpinning: true});
    
    this.setState({diceState: "Rolling.."});
    setTimeout(() => {
        this.setState({isSpinning: false});
        this.setState({diceState: "Roll"});
        this.roll();
      }, 1000); // Adjust the duration of the spin

      
  }

  roll() {
    let rand = Math.floor(Math.random() * 6) + 1;
    let rand2 = Math.floor(Math.random() * 6) + 1;

    if (rand === 1) this.setState({ dice1: faDiceOne });
    else if (rand === 2) this.setState({ dice1: faDiceTwo });
    else if (rand === 3) this.setState({ dice1: faDiceThree });
    else if (rand === 4) this.setState({ dice1: faDiceFour });
    else if (rand === 5) this.setState({ dice1: faDiceFive });
    else if (rand === 6) this.setState({ dice1: faDiceSix });

    if (rand2 === 1) this.setState({ dice2: faDiceOne });
    else if (rand2 === 2) this.setState({ dice2: faDiceTwo });
    else if (rand2 === 3) this.setState({ dice2: faDiceThree });
    else if (rand2 === 4) this.setState({ dice2: faDiceFour });
    else if (rand2 === 5) this.setState({ dice2: faDiceFive });
    else if (rand2 === 6) this.setState({ dice2: faDiceSix });
  }

  render() {
    return (
        
      <div className="center-cointainer">
        <h1>Dice!</h1>
        <div className="flex-container">
        <div className="contain-two-dice">
          <div className="dice-container">
            <FontAwesomeIcon icon={this.state.dice1} size="10x" className={`spinning-container ${this.state.isSpinning ? "spin" : ""}`}/>
          </div>
          <div className="dice-container">
            <FontAwesomeIcon icon={this.state.dice2} size="10x" className={`spinning-container ${this.state.isSpinning ? "spin" : ""}`}/>
          </div>
        </div>
        <div>
          <button
            onClick={this.handleClick}
            className="button"
          >{this.state.diceState}</button>
        </div>
        </div>
      </div>
    );
  }
}

export default RollDice;
