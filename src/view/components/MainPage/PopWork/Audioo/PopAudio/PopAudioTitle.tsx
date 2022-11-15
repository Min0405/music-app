import React, { Component } from 'react';
import './PopAudioTitle.scss'

// import { BiPlayCircle, BiRewind, BiFastForward, BiMessageRounded, BiShareAlt, BiAddToQueue } from "react-icons/bi";
// import { GiSoundWaves } from "react-icons/gi";
// import { BsSoundwave } from "react-icons/bs"
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Link } from 'react-router-dom';

class PopAudioTitle extends Component {

  render () {


    return (
      <div className='PopAudioTitle'>

           <Link to='./work' className='link'><div className='audio'><h2 >음원</h2></div></Link>
          <div className='more'>
            <Link to='./work'><button>더보기</button></Link>
          </div>

      </div>
    )
  };

};

export default PopAudioTitle;