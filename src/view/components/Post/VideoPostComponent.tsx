// import React, { Component } from "react";
import { BiRewind, BiPlayCircle, BiFastForward, BiUserCircle, BiAddToQueue, BiMessageRounded, BiShareAlt, BiCommentDots } from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'

import HeartCounter from '../StateComponent/HeartComponent/HeartCounter';

import './VideoPostComponent.scss'

interface VideoPostComponentProps {
  WorkMarginBottom: number;
}

const VideoPostComponent  = ( { WorkMarginBottom }: VideoPostComponentProps ) => {

    return (

      <div className="VideoPostComponent">

          <div className="Work-contents">
   
            <div className="Work-cont" style={{marginBottom: WorkMarginBottom}}>
              <div className="Work-frame">

                <div className="Work-user">
                  <BiUserCircle className="Work-profile"/>
                  <h1 className="Work-username">KimSunMin</h1>
                </div>

                <div className="Work-post">
                    {/* <BiChevronLeftCircle className="Work-left" style={{opacity: WorkArrow}}/> */}
                    <div className="Album-img"></div>
                    {/* <BiChevronRightCircle className="Work-right" style={{opacity: WorkArrow}}/> */}

{/* Work Right */}
                  <div className='Work-Right'>

                    <div className="Work-img"></div>                   

                    <div className='Work-bar'>
                      <div className='bar-contents'>
                        <BiRewind className='rewind'/>
                        <BiPlayCircle className="playbtn" />
                        <BiFastForward  className='forward'/>
                      </div>
                    </div>

                    <div className="Work-icons">
                      <div className='Work-heart'><HeartCounter /></div>
                      <div className='Work-comment'>
                        <BiMessageRounded className='Work-com-icon' />
                        <h1 className='Work-com-count'>1,234</h1>
                      </div>
                      <div className='Work-etc-icon'>
                        <BiShareAlt className='Work-share-icon' />
                        <BiAddToQueue className='Work-add-icon' />
                        <BiCommentDots className='Work-comment-icon' />
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>   


 
          </div>

      </div>

    )

  }
  

export default VideoPostComponent;