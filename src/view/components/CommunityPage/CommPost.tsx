import React, { Component } from "react";
// import { BiUserCircle, BiChevronLeftCircle, BiChevronRightCircle, BiMessageRounded, BiShareAlt } from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'

// import FirstPost from "./Post/FirstPost";
import ImagePost from "./Post/ImagePost";
import TextPost from "./Post/TextPost";
// import VideoPost from "./Post/VideoPost";
// import LastPost from "./Post/LastPost";
import CommProfile from "./CommProfile/CommProfile";

import './CommPost.scss'

class CommPost extends Component {
  render() {

    return (

      <div className="CommPost"> 

      <div className="Prof-Post">
        <CommProfile />
        <ImagePost PostMarginRight={350} PostMarginBottom={0} arrow={1}/>  
      </div>            
        <TextPost />
        <ImagePost PostMarginRight={0} PostMarginBottom={0} arrow={0}/>
        <ImagePost PostMarginRight={0} PostMarginBottom={0} arrow={1}/>
        <TextPost />
        <ImagePost PostMarginRight={0} PostMarginBottom={70} arrow={0}/>
        

      </div>

    )

  }
  
}

export default CommPost;