import { Component } from "react";
import Game from './contents/game';

class App extends Component{

  ChangeMode = (_mode, _count, _reverseId, _name) =>{
    this.state.reverseId.push(_reverseId)
    this.state.name.push(_name)
    this.setState({
      mode:_mode,
      count:(this.state.count+_count)
    });
  }

  constructor(props){
    super(props);
    this.state = {
      mode:'wait',
      count:0,
      reverseId:[],
      name:[]
    }
    
  }

  render(){
    
    if(this.state.mode === 'clicked' &&
    this.state.count === 2){
      if(this.state.name[0] !== this.state.name[1]){
        document.getElementById(this.state.reverseId[0]).childNodes[0]
      .style.webkitTransform = "rotateY(0deg)";
      document.getElementById(this.state.reverseId[0]).childNodes[1]
      .style.webkitTransform = "rotateY(-180deg)";

      document.getElementById(this.state.reverseId[1]).childNodes[0]
      .style.webkitTransform = "rotateY(0deg)";
      document.getElementById(this.state.reverseId[1]).childNodes[1]
      .style.webkitTransform = "rotateY(-180deg)";
      }
      // else{}

      this.setState({
        mode:'wait',
        count:0,
        reverseId:[],
        name:[]
      })
    }
    return (
      <div className="App">
        <Game onChangeMode={this.ChangeMode}
        ></Game>
      </div>
    );
  }
}

export default App;
