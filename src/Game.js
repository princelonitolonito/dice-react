import React, { Component } from 'react'

class Game extends Component{
    constructor(props)
    {
            super(props);
            this.state = {
                num: 0,
                clicked: false,
            };
            this.handleClick = this.handleClick.bind()
    }

    handleClick(e)
    {
        this.setState({clicked: true});
        
    }
    

    render()
    {
        return(
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }

}

export default Game;