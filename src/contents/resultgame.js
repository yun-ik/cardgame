import { Component } from "react";
import './resultgame.css';

class resultgame extends Component{

    ChangeResult(){
        this.props.Result("Start")
    }

    render(){
      return (
        <div
        className ="component">
            <p className="StartGame"
             onClick={() => this.ChangeResult()}>Click to Start game</p>
        </div>
      )
  }
}
  
  export default resultgame;