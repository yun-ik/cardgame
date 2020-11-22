import { Component } from "react";
import './game.css';
import images from './images';

class game extends Component{
  imgUrl =images[0].imgUrl;
  name = images[0].names;
  id = images[0].id;
  componentDidMount(){
    this.turnCardAll();
  }
  turnCardAll(){
    const front = document.getElementsByClassName("front");
    const back = document.getElementsByClassName("back");
    
    for(let i=0;i<back.length;i++){
      front[i].style.webkitTransform="rotateY(-180deg)"
      back[i].style.webkitTransform="rotateY(0deg)"
    }
    setTimeout(() => {
      for(let i=0;i<back.length;i++){
        front[i].style.webkitTransform="rotateY(0deg)"
        back[i].style.webkitTransform="rotateY(-180deg)"
      }
    }, 1500)
  }

  turnCard(e){
    e.target.parentNode.parentNode.children[0].style.webkitTransform
    = "rotateY(-180deg)";
    e.target.parentNode.parentNode.children[1].style.webkitTransform
    = "rotateY(0deg)";
  }

  turnOnCard = (e) => {
    if(e.target.parentNode.className === "front"){
      this.turnCard(e);
    }
    setTimeout(() => {
      this.props.onChangeMode(`clicked`,1,
      e.target.parentNode.parentNode.id,
      e.target.parentNode.parentNode.children[1].children[0].alt)
    }, 1500);
  }

  render(){

    return (
      <div>

      {this.id.map((id)=> (
        <div className="cardContainer" key={id} id={this.id[id]}
           onClick={(e) => this.turnOnCard(e)}>
        
          <div className="front">
           <img src="./img/front.jpg" alt=""/>
          </div>

          <div className="back">
           <img src={this.imgUrl[id]} alt={this.name[id]}/>
          </div>

        </div>
      ))}
      </div>
    );
  }
}

export default game;