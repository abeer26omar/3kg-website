import React from "react";
import Slider from "react-slick";
import { getHomeSlider } from "../../Util/http";
import { useQuery } from "@tanstack/react-query";

const HomeSLider = () => {
  const { data: slider } = useQuery({
    queryKey: ["projects-slider"],
    queryFn: () => getHomeSlider(),
  });
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
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
          {slider?.map((val, i) => (
            <div className="ptf-news-slide" key={i}>
              <div className="ptf-news-slide__media">
                <img src={val} alt="val.title" loading="lazy" />
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
