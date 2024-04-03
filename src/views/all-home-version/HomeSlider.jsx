import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import img_1 from '../../assets/img/image-0085.jpg';
import img_2 from '../../assets/img/image-0084.jpg';
import img_3 from '../../assets/img/image-0083.jpg';

const imageSlider = [
    img_1, img_2, img_3
]
const HomeSLider = ({news}) => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="swiper-slide grid-slider">
        <Slider {...settings} className="arrow-none">
          {imageSlider.map((val, i) => (
            <div className="ptf-news-slide" key={i}>
              <div className="ptf-news-slide__media">
                <img
                  src={val}
                  alt="val.title"
                  loading="lazy"
                />
              </div>
              {/* <div className="ptf-news-slide__content">
                {(val?.category && val?.category !== '') && (<div className="ptf-news-slide__meta">
                  <span className="cat">{val?.category}</span>
                </div>)}
                <h3 className="ptf-news-slide__title">
                  <Link to={`/news-details/${val?.id}`}>{val?.title}</Link>
                </h3>
                <div className="ptf-news-slide__excerpt">
                  <p>{val?.brief}</p>
                </div>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomeSLider;
