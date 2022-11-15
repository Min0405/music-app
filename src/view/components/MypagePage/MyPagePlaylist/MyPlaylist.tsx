import React, { Component } from "react";
// import { BiUserCircle, BiChevronLeftCircle, BiChevronRightCircle, BiMessageRounded, BiShareAlt } from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'

import PlaylistMusic from "../../PlaylistComponent/PlaylistMusic";

import './MyPlaylist.scss'

class MyPlaylist extends Component {
  render() {

    return (

      <div className="MyPlaylist">  

        <h1 className="MyPlaylist-title">My 플레이리스트</h1>

        <div className="My-playlist">
          <div className="playlist1">
            <PlaylistMusic listname="Pop 플레이리스트" listday="2022.11.02" musiclistWidth={300} AlbumHeight={160} AlbumWidth={160} Musicimg="./assets/img/1.jpg" />
            <PlaylistMusic listname="Pop 플레이리스트" listday="2022.11.02" musiclistWidth={300} AlbumHeight={160} AlbumWidth={160} Musicimg="./assets/img/2.jpg" />
          </div>
          <div className="playlist2">
            <PlaylistMusic listname="Pop 플레이리스트" listday="2022.11.02" musiclistWidth={300} AlbumHeight={160} AlbumWidth={160} Musicimg="./assets/img/3.jpg" />
            <PlaylistMusic listname="Pop 플레이리스트" listday="2022.11.02" musiclistWidth={300} AlbumHeight={160} AlbumWidth={160} Musicimg="./assets/img/4.jpg" />
          </div>
          <div className="playlist2">
            <PlaylistMusic listname="Pop 플레이리스트" listday="2022.11.02" musiclistWidth={300} AlbumHeight={160} AlbumWidth={160} Musicimg="./assets/img/6.jpg" />
            <PlaylistMusic listname="Pop 플레이리스트" listday="2022.11.02" musiclistWidth={300} AlbumHeight={160} AlbumWidth={160} Musicimg="./assets/img/7.jpg" />
          </div>
        </div>
        

      </div>

    )

  }
  
}

export default MyPlaylist;