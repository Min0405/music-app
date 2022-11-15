import React from "react";
import { Link } from "react-router-dom";
// import { HiOutlineUserCircle, HiOutlineUser, HiOutlineUsers } from 'react-icons/hi'
// import { AiFillHeart } from 'react-icons/ai'

// import PlaylistList from "../PlaylistListPage/PlayList";

import './PlaylistMusic.scss'


interface PlaylistMusicProps {
    listname: string;
    listday: string;
    musiclistWidth: number;
    AlbumWidth: number;
    AlbumHeight: number;
    Musicimg: string;
}

const PlaylistMusic = ({listname, listday, musiclistWidth, AlbumHeight, AlbumWidth, Musicimg} : PlaylistMusicProps) => {

    return (
      <div className="PlaylistMusic" style={{width: musiclistWidth}}>
        
        <Link to="/playlistList"><img src={Musicimg} alt="music" className="Music-album" style={{width: AlbumWidth, height: AlbumHeight}} /></Link>

        <div className="list-text">
          <Link to="/playlistList"><h1 className="Music-name">{listname}</h1></Link>
          <Link to="/playlistList"><h1 className="Music-day">{listday}</h1></Link>
        </div>
        
      </div> 


    )

}
  


export default PlaylistMusic;