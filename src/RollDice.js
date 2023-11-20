import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: faDiceOne,
      dice2: faDiceOne,
      isSpinning: false,
      diceState: "Roll",
      titleState: "サイコロ!",
      num: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.roll = this.roll.bind(this);
  }

  handleClick() {
    this.setState({ isSpinning: true });

    this.setState({ diceState: "" });
    this.setState({ titleState: "サイコロをしています！" });
    setTimeout(() => {
      this.setState({ isSpinning: false });
      this.setState({ diceState: "Roll" });
      this.setState({ titleState: "サイコロ!" });
      this.roll();
    }, 1000); // Adjust the duration of the spin
  }

  roll() {
    let rand = Math.floor(Math.random() * 6) + 1;
    let rand2 = Math.floor(Math.random() * 6) + 1;

    this.setState({num: rand + rand2});
    this.setState({ dice1: Die.getDice(rand) });
    this.setState({ dice2: Die.getDice(rand2) });
  }

  render() {
    return (
      
      <div className="center-cointainer">
     
     
     <h1>{this.state.titleState}</h1>
     
        <div className="flex-container">
          
        
        
          <div className="contain-two-dice">
            
            <div className="dice-container">
              <FontAwesomeIcon
                icon={this.state.dice1}
                size="10x"
                className={`spinning-container ${
                  this.state.isSpinning ? "spin" : ""
                }`}
              />
            </div>

            <div className="dice-container">
              <FontAwesomeIcon
                icon={this.state.dice2}
                size="10x"
                className={`spinning-container ${
                  this.state.isSpinning ? "spin" : ""
                }`}
              />
            
            </div>

                <div className="info">
            <button onClick={this.handleClick} className="button" disabled={this.state.isSpinning}>
              {this.state.diceState}
            </button>
            <h1>{this.state.num}</h1>

            </div>
          </div>
          <div>
          
          </div>
        </div>
        
      </div>
    );
  }
}

export default RollDice;
