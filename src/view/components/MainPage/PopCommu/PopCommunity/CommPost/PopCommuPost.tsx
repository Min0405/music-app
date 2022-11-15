import React from 'react';
import './PopCommuPost.scss'

import { BiMessageRounded, BiShareAlt, BiUserCircle } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai"
import { Link } from 'react-router-dom';

interface PopCommuPostProps {
  CommuWidth: number;
  CommuHeight: number;
}

const PopCommuPost = ( {CommuWidth, CommuHeight }: PopCommuPostProps ) => {

    return (
      <div className='PopCommuPost'>

        <div className='post'>

          <div className='comm-post'>

            <div className='frame' style={{ width: CommuWidth, height: CommuHeight }}>

              <div className='items'>
                  <img className='img' src="./assets/img/5.jpg" alt="im1" />

                <div className='contents'>
                  
                  <div className='profile'>
                    <Link to='./mypage'><BiUserCircle className='profileImg'/></Link>
                    <h1 className='username'>KimSunMin</h1>
                  </div>

                  <div className='textbox'>
                    <h1 className='boxtext'>
                      aaajsjd sdjd aljsdh akjasd kdjsdisduds nsidud isdu sdio sdkh <br/> 
                      sdjkshdskdjsjh sdjh dsh ksjdhffdks ksdjfhf sjdkfjksldf<br/>
                      jsjh dslkfj sdlkjfs lkfkjds lkdjf lsdkf slkdf lkdskjfndflk ksjdh <br/> 
                      jsjh dslkfj sdlkjfs lkfkjds lkdjf lsdkf slkdf lkdskjfndflk <br/>
                      ksjdhsddjdkhsjdjlsdlfk dslkfj sdlkkfjf sldkjkf sdkfjlskdflkj dslkfj <br/> 
                    </h1>
                  </div>  



              <div className='cont'>
                <div className='heart'>
                  <AiFillHeart className='heart-icon'/>
                  <h1 className='heart-count'>1,234</h1>
                </div>
                <div className='comment'>
                  <BiMessageRounded className='com-icon' />
                  <h1 className='com-count'>1,234</h1>
                </div>
                {/* <div className='etc-icon'> */}
                  <BiShareAlt className='share-icon' />
                {/* </div> */}
              </div>

            </div>
          </div>


            </div>
          </div>


        </div>
      </div>
    )
  }

export default PopCommuPost;