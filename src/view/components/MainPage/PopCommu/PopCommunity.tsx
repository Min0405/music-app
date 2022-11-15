import React from "react";

import PopCommuTitle from "./PopCommunity/Commtitle/PopCommuTitle";
import PopCommuPost from "./PopCommunity/CommPost/PopCommuPost";

import './PopCommunity.scss';



const PopCommunity = () => {
  return (
    <div className="main">
      <PopCommuTitle />

      <div className="commupost1">
        {/* <PopCommuPost boxWidth={300} boxHeight={300}/> */}
        <PopCommuPost CommuWidth={650} CommuHeight={240}/>
        <PopCommuPost CommuWidth={650} CommuHeight={240}/>
      </div>
      <div className="commupost2">
        {/* <PopCommuPost boxWidth={300} boxHeight={300}/> */}
        <PopCommuPost CommuWidth={650} CommuHeight={240}/>
        <PopCommuPost CommuWidth={650} CommuHeight={240}/>
      </div>
      <div className="commupost3">
        {/* <PopCommuPost boxWidth={300} boxHeight={300}/> */}
        <PopCommuPost CommuWidth={650} CommuHeight={240}/>
        <PopCommuPost CommuWidth={650} CommuHeight={240}/>
      </div>
      
    </div>
  );
}
export default PopCommunity;