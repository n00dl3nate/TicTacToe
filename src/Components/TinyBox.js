import React, {Component} from "react";
import Game from "./Game.js";

class TinyBox extends Component {
  constructor(props) {
    super(props);
    this.game = new Game();
    this.state = {
      clicked: false
    }
    this.divClicked = this.divClicked.bind(this);
  }

  divClicked(event){
    if(!this.state.clicked) {
      this.setState({clicked: true});
      this.props.handleDivClicked(event.target.id)
    }
    this.game.winAcross();
    this.game.winDown();
    this.game.winDiagonal();
  }

   render(){
     return (
     <div id={this.props.id} onClick={this.divClicked} className='tiny-box' ></div>
     )
   }
}

export default TinyBox;
