// import React, { Component } from "react";
import { BiRewind, BiPlayCircle, BiFastForward, BiUserCircle, BiAddToQueue, BiMessageRounded, BiShareAlt, BiCommentDots } from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'
import { GiSoundWaves } from 'react-icons/gi'

import HeartCounter from '../StateComponent/HeartComponent/HeartCounter'

import './AudioPostComponent.scss'

interface AudioPostComponentProps {
  WorkMarginBottom: number;
}

const AudioPostComponent  = ( { WorkMarginBottom }: AudioPostComponentProps ) => {

    return (

      <div className="AudioPostComponent">

          <div className="WorkAudio-contents">
   
            <div className="WorkAudio-cont" style={{marginBottom: WorkMarginBottom}}>
              <div className="WorkAudio-frame">

                <div className="WorkAudio-user">
                  <BiUserCircle className="WorkAudio-profile"/>
                  <h1 className="WorkAudio-username">KimSunMin</h1>
                </div>

                <div className="WorkAudio-post">
                    {/* <BiChevronLeftCircle className="Work-left" style={{opacity: WorkArrow}}/> */}
                    <div className="Audio-Album-img"></div>
                    {/* <BiChevronRightCircle className="Work-right" style={{opacity: WorkArrow}}/> */}

{/* Work Right */}
                  <div className='WorkAudio-Right'>

                    <div className="WorkAudio-seekbar">
                      <GiSoundWaves className='sound-bar' />
                      <GiSoundWaves className='sound-bar2'/>
                    </div>                   

                    <div className='WorkAudio-bar'>
                      <div className='play-bar-contents'>
                        <BiRewind className='WorkAudio-rewind'/>
                        <BiPlayCircle className="WorkAudio-playbtn" />
                        <BiFastForward  className='WorkAudio-forward'/>
                      </div>
                    </div>

                    <div className="WorkAudio-icons">
                      <div className='WorkAudio-heart'><HeartCounter /></div>
                      <div className='WorkAudio-comment'>
                        <BiMessageRounded className='WorkAudio-com-icon' />
                        <h1 className='WorkAudio-com-count'>1,234</h1>
                      </div>
                      <div className='WorkAudio-etc-icon'>
                        <BiShareAlt className='WorkAudio-share-icon' />
                        <BiAddToQueue className='WorkAudio-add-icon' />
                        <BiCommentDots className='WorkAudio-comment-icon' />
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
  

export default AudioPostComponent;