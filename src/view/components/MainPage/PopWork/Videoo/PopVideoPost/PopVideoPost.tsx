
import React from 'react';
import './PopVideoPost.scss'

// import { Link } from 'react-router-dom';

// import {AiOutlinePlayCircle} from 'react-icons/fa';
// import ReactPlayer from 'react-player'
import { BiPlayCircle, BiRewind, BiFastForward, BiMessageRounded, BiShareAlt, BiAddToQueue } from "react-icons/bi";

import { AiFillHeart } from "react-icons/ai"
import { Link } from 'react-router-dom';


interface PopVideoPostProps {
  boxWidth: number;
  boxHeight: number;
  isPlaybar?: boolean;
}

const PopVideoPost = ( {boxWidth, boxHeight, isPlaybar = false}: PopVideoPostProps ) => {

  // render () {

    return (
      
      <div className='PopVideoPost'>

        <div className='video-post'>

          <div className='Pop-video'>
            <div className='video-frame' style={{ width: boxWidth, height: boxHeight }}>
              <div className='video'></div>

              <Link to='./user'><h1 className='video-userName'>by.OOOOO</h1></Link>

              <div className='video-bar'>
                <BiRewind className='video-rewind'/>
                <BiPlayCircle className="video-playbtn" />
                <BiFastForward  className='video-forward'/>
              </div>

              <div className='Pop-video-cont'>

                <div className='Pop-video-heart'>
                  <AiFillHeart className='Pop-video-heart-icon'/>
                  <h1 className='Pop-video-heart-count'>1,234</h1>
                </div>
                <div className='Pop-video-comment'>
                  <BiMessageRounded className='Pop-video-com-icon' />
                  <h1 className='Pop-video-com-count'>1,234</h1>
                </div>
                <div className='Pop-video-etc-icon'>
                  <BiShareAlt className='Pop-video-share-icon' />
                  <BiAddToQueue className='Pop-video-add-icon' />
                </div>

              </div>

            </div>
          </div>


        </div>
      </div>
    );
  };

// };

export default PopVideoPost;