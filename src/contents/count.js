import { Component } from "react";

var cnt = 3;

class count extends Component{

  componentDidMount(){
    setInterval(this.count, 1000)
  }

  count(){
    cnt--
    if(cnt === 0){
        cnt = "Start"
    }
    document.getElementsByClassName("count")[0].innerText = cnt
  }

    render(){
      return (
      <div><p className="count">{cnt}</p></div>
      )
  }
}
  
  export default count;