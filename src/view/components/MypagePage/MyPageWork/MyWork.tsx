import React, { Component } from "react";
// import { BiUserCircle, BiChevronLeftCircle, BiChevronRightCircle, BiMessageRounded, BiShareAlt } from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'

import VideoPostComponent from "../../Post/VideoPostComponent";
import AudioPostComponent from "../../Post/AudioPostComponent";

import './MyWork.scss'

class MyWork extends Component {
  render() {

    return (

      <div className="MyWork">   

        <h1 className="MyWork-title">My 작업물</h1>

        <div className="My-Work">

          <VideoPostComponent WorkMarginBottom={0} /> 
          <AudioPostComponent WorkMarginBottom={0} />
          <VideoPostComponent WorkMarginBottom={0} />
          <AudioPostComponent WorkMarginBottom={0} /> 
          <VideoPostComponent WorkMarginBottom={0} />
          <VideoPostComponent WorkMarginBottom={0} />
          <AudioPostComponent WorkMarginBottom={0} />
          <VideoPostComponent WorkMarginBottom={50} />  

        </div>       

      </div>

    )

  }
  
}

export default MyWork;