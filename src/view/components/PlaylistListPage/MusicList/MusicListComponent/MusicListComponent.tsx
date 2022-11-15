import React from "react";

import PlaylistMusic from "../../../PlaylistComponent/PlaylistMusic";

import './MusicListComponent.scss';

interface MusicListComponentProps {
  ListCount: string;
  musicAlbumImg: string;
}

const MusicListComponent =({ ListCount, musicAlbumImg }: MusicListComponentProps ) => {

    return (

      <div className="MusicListComponent">   
        
          <div className="MusicListComponent-list">

            <h1 className="list-count">{ListCount}</h1>

            <div className="PlaylistMusic-component"><PlaylistMusic Musicimg={musicAlbumImg} listname="Pop" listday="2022.11.02" musiclistWidth={180} AlbumHeight={100} AlbumWidth={100} /></div>

          </div>

        </div>

    )

  }
  

export default MusicListComponent;