import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import { getCaseStudies } from '../../Util/http';

const portfolioContent = [
  {
    img: "work-1",
    categorie: "UI/UX",
    title: "Taskly Dashboard",
  },
  {
    img: "work-2",
    categorie: "Product",
    title: "Film & Art Festival",
  },
  {
    img: "work-3",
    categorie: "Branding, Packaging",
    title: "Dark Wishky Wine",
  },
  {
    img: "work-4",
    categorie: "Illustration",
    title: "Swiss Style Poster",
  },
  {
    img: "work-5",
    categorie: "UI/UX",
    title: "Liarch Architecture Firm",
  },
];

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
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
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
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="ptf-work__meta">
                <div className="ptf-work__category">{item.category}</div>
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
