import React from "react";
// import { BiUserCircle } from "react-icons/bi";
// import { AiFillHeart,  AiOutlineHeart } from "react-icons/ai";

import { BiUserPlus, BiUserCheck } from 'react-icons/bi'

import './Following.scss'

class Following extends React.Component {
   state = {
    isChecked: false,
   };

   onClick = () => {
    this.state.isChecked ?
    this.setState({
      isChecked: false,
    }) :
    this.setState({
      isChecked: true,
    }); 
   }

  render() {

    return (

      <React.Fragment>

        <div className="icons-list">
          {this.state.isChecked ?
          <BiUserPlus className="heart-fill" onClick={this.onClick}/> :
          <BiUserCheck className="heart-outline" onClick={this.onClick}/>}          

          {/* <h3 className="heart-count">{this.state.notice}</h3> */}
          
        </div>
      </React.Fragment>
    )
  }
}


export default Following;