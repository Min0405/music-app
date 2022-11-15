import React, { Component } from "react";
import { BiUserCircle, BiMessageRounded, BiShareAlt } from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'

import HeartCounter from "../../StateComponent/HeartComponent/HeartCounter";

import './TextPost.scss'

class TextPost extends Component {
  render() {

    return (

      <div className="TextPost">

          <div className="contents">

            <div className="cont">
              <div className="frame">

                <div className="user">
                  <BiUserCircle className="profile"/>
                  <h1 className="username">KimSunMin</h1>
                </div>

                <div className='textbox'>
                  <h1 className='boxtext'>
                    aaajsjd sdjd aljsdh akjasd kdjsdisdu dkfjkds nsxz<br/> 
                    sdjkshdskdjsjh sdjh dsh ksjdhff skjdf djskhsd<br/>
                    jsjh dslkfj sdlkjfs lkfkjds lkdjf lsdksdj dfjf slkdf  <br/> 
                    jsjh dslkfj sdlkjfs lkfkjds lkdjf lsdkfdfsd smsj sdjfh <br/>
                    ksjdhsddjdkhsjdjlsdlfk dslkfj sdlkk sddsk jfkkjs <br/> 
                    ksjdhsddjdkhsjdjlsdlfk dslkfj sdlkk sdjsjhds <br/> 
                  </h1>
                </div>                

                <div className="icons">
                  {/* <AiFillHeart className='heart'/>
                  <h1 className='heart-count'>1,234</h1> */}
                  <div className="heart">
                    <HeartCounter />
                  </div>
                  
                  <BiMessageRounded className='com' />
                  <h1 className='com-count'>1,234</h1>
                  <BiShareAlt className='share' />
                </div>

              </div>
            </div>



          </div>
      </div>

    )

  }
  
}

export default TextPost;