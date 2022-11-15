import React, { Component } from "react";

import './PlayList.scss'

import ListAlbum from "./ListMainAlbum/ListAlbum";
import MiniProfile from "./MiniProfile/MiniProfile";
import MusicList from "./MusicList/MusicList";

class PlayList extends Component {
  render() {

    return (

      <div className="PlayList">   

        <div className="Playlist-list-content">
          <div className="PlayList-header">
            <ListAlbum Listusername="KimSunMin" Listtitle="발라드" Listiimg="assets/img/1.jpg"/>
            <MiniProfile mininame="KimSunMin" />
          </div>

          <MusicList />
        </div>

      </div>

    )

  }
  
}

export default PlayList;