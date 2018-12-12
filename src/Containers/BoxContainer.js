import React ,{Component} from 'react';
import TinyBox from '../Components/TinyBox.js';

class BoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      num: 0
    }
  this.handleDivClicked = this.handleDivClicked.bind(this)
  }

handleDivClicked(id){
  if(this.state.num % 2 === 0){
    const div = document.getElementById(id);
    div.setAttribute('class','clicked');
  } else {
    const div = document.getElementById(id);
    div.setAttribute('class','clicked1');
  }
  let count = this.state.num;
  this.setState({num: count + 1})
}

render(){
  let boxArray = [];
  let i = 0;
  while(i < 9 ){
    let oneBox = <TinyBox key={i} id={i} handleDivClicked={this.handleDivClicked} />
    boxArray.push(oneBox);
    i += 1;
  }

  return(
    <>
    <div className="container">
      {boxArray}
    </div>
    </>
  )};
}

export default BoxContainer;
