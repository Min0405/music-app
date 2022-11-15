import React, { useState } from 'react';
import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import "./Slider.scss";

interface props {
  slides: any[];
}

  const ImageSlider = ({ slides } : props) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    return (
      <section className='slider'>
        
        {/* <div className='contents'> */}
          <BiChevronLeftCircle className='left-arrow' onClick={prevSlide} />
          

          {SliderData.map((slide, index, item) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt='phot' className='image'/>
                )}
              </div>
            );
          })}
          
          <BiChevronRightCircle className='right-arrow' onClick={nextSlide} />
          
        {/* </div> */}
      </section>
    );
  };

export default ImageSlider;