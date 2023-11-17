import React, { Component } from 'react'
import Game from './Game'; 
import RollDice from './RollDice';
import "./Global.css"; // Import the global CSS file
class App extends Component {


    render()
    {
      return(
        

          <div> 
            <RollDice/>
          </div>
        
      );
    }
  }

export default App;
