import React, { useEffect } from "react";
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import { getTestimonial } from '../../Util/http';


const Testimonial = ({getQuotesBg, getCurrentSlide}) => {

  const handleSlideChange = (slideIndex) => {
    getCurrentSlide(slideIndex);
  };
  
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (_, nextSlide) => handleSlideChange(nextSlide),
  };
  
  const { data: testimonial } = useQuery({
    queryKey: ['testimonial'],
    queryFn: () => getTestimonial(1)
  });

  useEffect(()=>{
    if(testimonial){
      getQuotesBg(testimonial)
    }
  },[testimonial]);

  return (
    <>
      <Slider {...settings} className="arrow-none">
        {testimonial && testimonial?.items.map((val, i) => (
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={(i * 100).toString()}
            key={i}
          >
            <div
              className="ptf-testimonial ptf-testimonial--style-2"
              style={{
                "--ptf-text-align": "left",
                "--ptf-content-color": "var(--ptf-color-white)",
                "--ptf-author-color": "var(--ptf-color-white)",
                "--ptf-info-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-testimonial__content">
                <p>{val.qute}</p>
              </div>
              <div className="ptf-testimonial__meta">
                <h6 className="ptf-testimonial__author">{val.title}</h6>
                <div className="ptf-testimonial__info">{val.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
