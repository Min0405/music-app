// import React, { Component } from 'react';
import './PopAudioPost.scss'

import { BiPlayCircle, BiRewind, BiFastForward, BiMessageRounded, BiShareAlt, BiAddToQueue } from "react-icons/bi";
// import { GiSoundWaves } from "react-icons/gi";
import { BsSoundwave } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { Link } from 'react-router-dom';

interface PopAudioPostProps {
  frameWidth: number;
  frameHeight: number;
  // isPlaybar?: boolean;
}

const PopAudioPost = ( {frameWidth, frameHeight }: PopAudioPostProps ) => {


    return (
      <div className='PopAudioPost'>

        <div className='audio-post'>

          <div className='post'>
            <div className='frame' style={{ width: frameWidth, height: frameHeight }}>
              <div className='audio'>
                <BsSoundwave className='audiobar'/><BsSoundwave className='audiobar'/><BsSoundwave className='audiobar'/>
                {/* <GiSoundWaves className='audiobar'/> */}
              </div>

              <Link to='./user'><h1 className='userName'>by.OOOOO</h1></Link>

              <div className='bar'>
                <BiRewind className='rewind'/>
                <BiPlayCircle className="playbtn" />
                <BiFastForward  className='forward'/>
              </div>

              <div className='cont'>

                <div className='heart'>
                  <AiOutlineHeart className='heart-icon'/>
                  <h1 className='heart-count'>1,234</h1>
                </div>
                <div className='comment'>
                  <BiMessageRounded className='com-icon' />
                  <h1 className='com-count'>1,234</h1>
                </div>
                <div className='etc-icon'>
                  <BiShareAlt className='share-icon' />
                  <BiAddToQueue className='add-icon' />
                </div>

              </div>

            </div>
          </div>


        </div>
      </div>
    )
  };

export default PopAudioPost;