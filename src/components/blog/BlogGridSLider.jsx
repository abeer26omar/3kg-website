import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BlogGridContent = [
  {
    img: "post-1",
    date: "Dec 7, 2021",
    title: "How to use solid color combine with simple furnitures",
    descriptions: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua...`,
  },
  {
    img: "post-2",
    date: "Dec 11, 2021",
    title: "The evolution of Swiss style in Interaction Design",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua...`,
  },
  {
    img: "post-3",
    date: "Dec 7, 2021",
    title: "The evolution of Swiss style in Interaction Design",
    descriptions: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua...`,
  },
];

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
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="ptf-news-slide__content">
                <div className="ptf-news-slide__meta">
                  <span className="cat">{val.category}</span>
                  {/* <span className="date">{val.date}</span> */}
                </div>
                <h3 className="ptf-news-slide__title">
                  <Link to={`/news-details/${val.id}`}>{val.title}</Link>
                </h3>
                <div className="ptf-news-slide__excerpt">
                  <p>{val.brief}</p>
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
