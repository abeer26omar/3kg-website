import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BlogGridSLider = ({news}) => {
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
          {news && news?.items.slice(0, 3).map((val, i) => (
            <div className="ptf-news-slide" key={i}>
              <div className="ptf-news-slide__media">
                <img
                  src={val.main_image}
                  alt="val.title"
                  loading="lazy"
                />
              </div>
              <div className="ptf-news-slide__content">
                {(val?.category && val?.category !== '') && (<div className="ptf-news-slide__meta">
                  <span className="cat">{val?.category}</span>
                </div>)}
                <h3 className="ptf-news-slide__title">
                  <Link to={`/news-details/${val?.id}`}>{val?.title}</Link>
                </h3>
                <div className="ptf-news-slide__excerpt">
                  <p>{val?.brief}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BlogGridSLider;
