import React, { Component } from 'react';
import './PopVideoTitle.scss'



// import { Link } from 'react-router-dom';

// import {AiOutlinePlayCircle} from 'react-icons/fa';
// import ReactPlayer from 'react-player'
// import { BiPlayCircle, BiRewind, BiFastForward, BiMessageRounded, BiShareAlt, BiAddToQueue } from "react-icons/bi";

// import { AiFillHeart } from "react-icons/ai"
import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

class PopVideoTitle extends Component {

  render () {

    return (
      
      <div className='PopVideoTitle'>

        <div className='content'>

          <Link to='./work' className='link'><h1 className='title-text'>인기 작업물</h1></Link>
          <Link to='./work' className='link'><h2 className='video-text'>동영상</h2></Link>
          <div className='more'>
            <Link to='./work'><button>더보기</button></Link>
          </div>
          
        </div>  

      </div>
    );
  };

};

export default PopVideoTitle;