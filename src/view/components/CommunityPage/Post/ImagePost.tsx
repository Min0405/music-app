// import React, { Component } from "react";
import { BiUserCircle, BiChevronLeftCircle, BiChevronRightCircle, BiMessageRounded, BiShareAlt } from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'

import HeartCounter from '../../StateComponent/HeartComponent/HeartCounter';

import './ImagePost.scss'

interface ImagePostProps {
  PostMarginRight: number;
  PostMarginBottom: number;
  arrow: number;
}

const ImagePost  = ( { PostMarginRight, PostMarginBottom, arrow }: ImagePostProps ) => {

    return (

      <div className="ImagePost">

          <div className="contents">
   
            <div className="cont">
              <div className="frame" style={{marginRight: PostMarginRight, marginBottom: PostMarginBottom}}>

                <div className="user">
                  <BiUserCircle className="profile"/>
                  <h1 className="username">KimSunMin</h1>
                </div>

                <div className="post">
                  <BiChevronLeftCircle className="left" style={{opacity: arrow}}/>
                  <div className="img"></div>
                  <BiChevronRightCircle className="right" style={{opacity: arrow}}/>
                </div>

                <div className="icons">
                  {/* <AiFillHeart className='heart'/>
                  <h1 className='heart-count'>1,234</h1> */}
                  <div className='heart'><HeartCounter /></div>
                  <BiMessageRounded className='com' />
                  <h1 className='com-count'>1,234</h1>
                  <BiShareAlt className='share' />
                </div>

                <div className='textbox'>
                  <h1 className='boxtext'>
                    aaajsjd sdjd aljsdh akjasd kdjsdisdu dkfjkds ns<br/> 
                    sdjkshdskdjsjh sdjh dsh ksjdhff djskh<br/>
                    jsjh dslkfj sdlkjfs lkfkjds lkdjf lsdk dfjf slkdf  <br/> 
                    jsjh dslkfj sdlkjfs lkfkjds lkdjf lsdkfdfj sdjfh <br/>
                    ksjdhsddjdkhsjdjlsdlfk dslkfj sdlkk sddsk jfkkjs <br/> 
                    ksjdhsddjdkhsjdjlsdlfk dslkfj sdlkk sdjsjh <br/> 
                  </h1>
                </div>
              </div>
            </div>   


 
          </div>

      </div>

    )

  }
  

export default ImagePost;