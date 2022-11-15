import React, { Component } from "react";
import { HiOutlineUserCircle, HiOutlineUser, HiOutlineUsers } from 'react-icons/hi'
// import { AiFillHeart } from 'react-icons/ai'

import './MyProfile.scss'

class MyProfile extends Component {
  render() {

    return (
      <div className="MyProfile">

          <div className="My-frame">

            <div className="My-contents">

              <HiOutlineUserCircle className="My-icon"/>

              <div className="My-information">
          
                <div className="My-inform">

{/* Top information */}
                

                  <div className="user-inform">
                    <div className="My-namee">
                      <h1 className="My-name">name</h1>
                      <h1 className="My-nametext">KimSunMin</h1><br/>
                    </div>
                    <div className="My-emaill">
                      <h1 className="My-email">email</h1>
                      <h1 className="My-emailtext">min0529sun@gmail.com</h1>
                    </div>
                  </div>

{/* follow information */}
                  <div className="My-follow">
                    <div className="My-following">
                      <HiOutlineUser className="My-lowing-icon"/>
                      <h1 className="My-lowing">following</h1>
                      <h1 className="My-lowing-number">00명</h1>
                    </div>
                    <div className="My-follower">
                      <HiOutlineUsers className="My-lower-icon" />
                      <h1 className="My-lower">followers</h1>
                      <h1 className="My-lower-number">00명</h1>
                    </div>
                  </div>
                </div> 

              

                  <div className="Bio">
                    <h1 className="Bio-title">BIO</h1>
                    <div className="Bio-textbox">
                      <h1 className="Bio-text">decribe yourself...</h1>
                    </div>
                  </div>

              

              </div>



            </div>
          </div>
        </div> 


    )

  }
  
}

export default MyProfile;