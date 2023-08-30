import React,{ useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css'
import { dataDigitalBestSeller } from '../data';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import imgGirl from '../img/japan.png';


const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="arrow-next slick-prev bg-gray-500 rounded-full hover:bg-gray-700" onClick={props.onClick}>
      <KeyboardArrowLeftIcon />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
    className="arrow-left slick-next bg-gray-500 rounded-full hover:bg-gray-700 " onClick={props.onClick}
    >
      <KeyboardArrowRightIcon />
    </div>
  );
};


export default function LanguageSlider() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 670,
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

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <section className='w-full bg-gray-100 p-12'>
    <div className="App">
      <Slider {...settings}
      prevArrow={<CustomPrevArrow />}
      nextArrow={<CustomNextArrow />} className=''>
        {dataDigitalBestSeller.map((item) => (
          <div className="card-language">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
            </div>
            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
            </div>
            <div className="card-bottom">
              <h5>{item.price}</h5>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  )
}
