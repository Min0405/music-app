// import React from 'react';

// import Navbar from '../components/Navbar/Navbar0/Navbar';

import PopWorkVideo from '../components/MainPage/PopWork/Videoo/PopWorkVideo';
import PopWorkAudio from '../components/MainPage/PopWork/Audioo/PopWorkAudio';

import ImageSlider from '../components/MainPage/Slider/ImageSlider';
import { SliderData } from '../components/MainPage/Slider/SliderData';

import PopCommunity from '../components/MainPage/PopCommu/PopCommunity';

import More from '../components/MainPage/More/CommuMore';

import './Mainpage.scss';

const Mainpage = () => {
  return (

    <div className="main">
      {/* <Navbar /> */}
      <ImageSlider slides={SliderData} />
      {/* <Banner /> */}
      <PopWorkVideo/>
      <PopWorkAudio />
      <PopCommunity />
      <More />
    </div>
  );
}

export default Mainpage;