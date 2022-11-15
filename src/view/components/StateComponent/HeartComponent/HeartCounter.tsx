import React from "react";
// import { BiUserCircle } from "react-icons/bi";
import { AiFillHeart,  AiOutlineHeart } from "react-icons/ai";

import './HeartCounter.scss'

class HeartCounter extends React.Component {
   state = {
    isChecked: false,
    notice: '99',
   };

   onClick = () => {
    this.state.isChecked ?
    this.setState({
      isChecked: false,
      notice: '99',
    }) :
    this.setState({
      isChecked: true,
      notice: '100',
    }); 
   }

  render() {

    return (

      <React.Fragment>

        <div className="icons-list">
          {this.state.isChecked ?
          <AiFillHeart className="heart-fill" onClick={this.onClick}/> :
          <AiOutlineHeart className="heart-outline" onClick={this.onClick}/>}          

          <h3 className="heart-count">{this.state.notice}</h3>
          
        </div>
      </React.Fragment>
    )
  }
}


export default HeartCounter;