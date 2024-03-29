import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import { getCaseStudies } from '../../Util/http';

const Portfolio = () => {

  const { data: caseStudies } = useQuery({
    queryKey: ['caseStudies'],
    queryFn: () => getCaseStudies(true, 1)
  });

  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    centerPadding: "0",
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="ptf-content-slider swiper-container slide-portfolio">
      <div className="swiper-wrapper">
        <Slider {...settings}>
          {/* <!--Portfolio Item--> */}
          {caseStudies && caseStudies?.items.map((item, i) => (
            <article className="ptf-work ptf-work--style-3" key={i}>
              <div className="ptf-work__media">
                <Link to={`/case-details/${item.id}`} className="ptf-work__link"></Link>
                <img
                  src={item.main_image}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <div className="ptf-work__meta">
                {(item?.category && item?.category !== '') && (<div className="ptf-work__category">{item?.category}</div>)}
                <h4 className="ptf-work__title">
                  <Link to={`/case-details/${item.id}`}>{item.title}</Link>
                </h4>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
