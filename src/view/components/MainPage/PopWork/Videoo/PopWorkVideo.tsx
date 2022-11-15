import React from "react";

import PopVideoTitle from "./PopVideo/PopVideoTitle";
import PopVideoPost from "./PopVideoPost/PopVideoPost";
// import PopVideoPost from "./PopVideoPost/PopVideoPost";

import './PopWorkVideo.scss';



const PopWorkVideo = () => {
  return (
    <div className="main">
      <PopVideoTitle />

      <div className="videopost">
        <PopVideoPost boxWidth={300} boxHeight={290}/>
        <PopVideoPost boxWidth={300} boxHeight={290}/>
        <PopVideoPost boxWidth={300} boxHeight={290}/>
        <PopVideoPost boxWidth={300} boxHeight={290}/>
      </div>
      
    </div>
  );
}
export default PopWorkVideo;