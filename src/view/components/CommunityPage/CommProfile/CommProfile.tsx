import React, { Component } from "react";
import { HiOutlineUserCircle, HiOutlineUser, HiOutlineUsers } from 'react-icons/hi'
// import { AiFillHeart } from 'react-icons/ai'
import { Link } from "react-router-dom";

// import MypagePage from "../../../pages/MypagePage";

import './CommProfile.scss'

class CommProfile extends Component {
  render() {

    return (
      <div className="commprofile">

          <div className="frame">
        
            <div className="inform">

{/* Top information */}
              <Link to="/mypage"><HiOutlineUserCircle className="usericon"/></Link>

              <div className="namee">
                <h1 className="name">name</h1>
                <h1 className="nametext">KimSunMin</h1><br/>
              </div>
              <div className="emaill">
                <h1 className="email">email</h1>
                <h1 className="emailtext">min0529sun@gmail.com</h1>
              </div>

{/* follow information */}
              <div className="follow">
                <div className="following">
                  <HiOutlineUser className="lowing-icon"/>
                  <h1 className="lowing">following</h1>
                  <h1 className="lowing-number">00명</h1>
                </div>
                <div className="follower">
                  <HiOutlineUsers className="lower-icon" />
                  <h1 className="lower">followers</h1>
                  <h1 className="lower-number">00명</h1>
                </div>
              </div>
            </div>

            <div className="Mylist">

{/* playlist */}
              <div className="playlists">
                  <h1 className="list-title">KimSunMin's Playlist</h1>
                  <ul className="list">
                    <li>pop playlist</li>
                    <li>work playlist</li>
                    <li>office playlist</li>
                    <li>study playlist</li>
                  </ul>
              </div>

{/* wotk */}
              <div className="works">
                  <h1 className="list-title2">KimSunMin's Playlist</h1>
                  <ul className="list2">
                    <li>pop playlist</li>
                    <li>work playlist</li>
                    <li>office playlist</li>
                    <li>study playlist</li>
                  </ul>
              </div>

            </div>

          </div> 
        </div> 


    )

  }
  
}

export default CommProfile;