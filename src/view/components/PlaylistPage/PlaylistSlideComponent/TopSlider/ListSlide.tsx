import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'

// import ArrowLeft from "@material-ui/icons/ArrowLeft";
// import ArrowRight from "@material-ui/icons/ArrowRight";

import './ListSlide.scss';

import { dataDigitalBestSeller } from './data';

// import { dataDigitalBestSeller2 } from './data2';
// import imgGirl from './assets/images/defaultImage.jpg';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <BiRightArrowCircle  onClick={onClick} className={className} style={{ ...style, display: "block", color: "black" }} />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <BiLeftArrowCircle  onClick={onClick} className={className} style={{ ...style, display: "block", color: "black" }} />
  );
}

class ListSlide extends Component {

  render() {

    // const [ setDefaultImage] = useState({});
    const settings = {
      // dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow className="nextArrow" />,
      prevArrow: <SamplePrevArrow className="prevArrow" />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      
    };

    // const handleErrorImage = (data) => {
    //   setDefaultImage((prev) => ({
    //     ...prev,
    //     [data.target.alt]: data.target.alt,
    //     linkDefault: imgGirl,
    //   }));
    // };

    return (
      <div className="ListSlide">
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div>
              <div className="card">
                <div className="card-top">
                  <img src={ item.linkImg } alt={ item.title }/>
                  {/* <img src={ item.linkImg2 } alt={ item.title }/> */}
                </div>
              </div>
              <h3 className='list-title'>{item.title}</h3>
              <h4 className='list-username'>{item.username}</h4>

              {/* <div className="card">
                <div className="card-top">
                  <img src={ item.linkImg } alt={ item.title }/>
                </div>
              </div>
              <h3 className='list-title'>{item.title}</h3>
              <h4 className='list-username'>{item.username}</h4> */}

              {/* <button><SampleNextArrow /></button> */}

            </div>
          ))}
        </Slider>
      </div>
    );
  }  
}


export default ListSlide;