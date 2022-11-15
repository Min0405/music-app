import React, { Component } from "react";
// import { BiUserCircle, BiChevronLeftCircle, BiChevronRightCircle, BiMessageRounded, BiShareAlt } from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'

import VideoPostComponent from "../Post/VideoPostComponent";
import AudioPostComponent from "../Post/AudioPostComponent";

import './WorkPost.scss'

class WorkPost extends Component {
  render() {

    return (

      <div className="Work-Post">    
        <VideoPostComponent WorkMarginBottom={0} /> 
        <AudioPostComponent WorkMarginBottom={0} />
        <VideoPostComponent WorkMarginBottom={0} />
        <AudioPostComponent WorkMarginBottom={0} />
        <VideoPostComponent WorkMarginBottom={0} />
        <VideoPostComponent WorkMarginBottom={0} />
        <AudioPostComponent WorkMarginBottom={0} />
        <VideoPostComponent WorkMarginBottom={50} />      
        
      </div>

    )

  }
  
}

export default WorkPost;