import { Component } from 'react';
import './Playlist.scss'
import ListSlide from './PlaylistSlideComponent/TopSlider/ListSlide';

class Playlist extends Component {

  render() {

    return(

      <div>
        <ListSlide />
      </div>
      
    )
  }
}

export default Playlist;