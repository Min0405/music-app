import React, { Component } from 'react';
import './PopCommuTitle.scss'

// import { BiMessageRounded, BiShareAlt, BiUserCircle } from "react-icons/bi";
// import { AiFillHeart } from "react-icons/ai"
import { Link } from 'react-router-dom';

class PopCommuTitle extends Component {

  render () {

    return (
      <div className='PopCommuTitle'>

        <div className='content'>
          
          <Link to='./commu' className='link'><h1 className='title'>인기 글</h1></Link>
          <div className='more'>
            <Link to='./commu'><button>더보기</button></Link>
          </div>
        </div>  

      </div>
    )
  }
}

export default PopCommuTitle;