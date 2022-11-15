import React, { Component } from "react";

import './MusicList.scss'

import MusicListComponent from "./MusicListComponent/MusicListComponent";

class MusicList extends Component {
  render() {

    return (

      <div className="MusicList">   

        <div className="MusicList-frame">

          <div className="MusicList-center">

            <div className="MusicList-list1">
              <MusicListComponent ListCount="1" musicAlbumImg="./assets/img/1.jpg" />
              <MusicListComponent ListCount="2" musicAlbumImg="./assets/img/2.jpg" />
              <MusicListComponent ListCount="3" musicAlbumImg="./assets/img/3.jpg" />
              <MusicListComponent ListCount="4" musicAlbumImg="./assets/img/4.jpg" />
              <MusicListComponent ListCount="5" musicAlbumImg="./assets/img/6.jpg" />
              <MusicListComponent ListCount="6" musicAlbumImg="./assets/img/7.jpg" />
              <MusicListComponent ListCount="7" musicAlbumImg="./assets/img/8.jpg" />
              <MusicListComponent ListCount="8" musicAlbumImg="./assets/img/9.jpg" />
            </div>

            <div className="MusicList-list2">
              <MusicListComponent ListCount="9" musicAlbumImg="./assets/img/1.jpg" />
              <MusicListComponent ListCount="10" musicAlbumImg="./assets/img/2.jpg" />
              <MusicListComponent ListCount="11" musicAlbumImg="./assets/img/3.jpg" />
              <MusicListComponent ListCount="12" musicAlbumImg="./assets/img/4.jpg" />
              <MusicListComponent ListCount="13" musicAlbumImg="./assets/img/6.jpg" />
              <MusicListComponent ListCount="14" musicAlbumImg="./assets/img/7.jpg" />
              <MusicListComponent ListCount="15" musicAlbumImg="./assets/img/8.jpg" />
              <MusicListComponent ListCount="16" musicAlbumImg="./assets/img/9.jpg" />
            </div>

            <div className="MusicList-list3">
              <MusicListComponent ListCount="17" musicAlbumImg="./assets/img/1.jpg" />
              <MusicListComponent ListCount="18" musicAlbumImg="./assets/img/2.jpg" />
              <MusicListComponent ListCount="19" musicAlbumImg="./assets/img/3.jpg" />
              <MusicListComponent ListCount="20" musicAlbumImg="./assets/img/4.jpg" />
            </div>

          </div>

        </div>

      </div>

    )

  }
  
}

export default MusicList;