import React from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

const BlogMasonryGrid = ({projects, visibleCards}) => {
  return (
    <>
      {/* <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      > */}
        {projects && projects.slice(0, visibleCards).map((item, i) => (
           <div className="col-lg-4 col-md-6 col-12 h-100" key={i}>
            <div className="grid-item">
              <article className="ptf-post ptf-post--style-2">
                <div className="ptf-post__media">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      height: '336px',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="ptf-post__media__content">
                    <header className="ptf-post__header">
                      <div className="ptf-post__meta">
                        <span className="cat">{item.category}</span>
                      </div>
                      <h3 className="ptf-post__title">{item.title}</h3>
                    </header>
                  </div>
                </div>
                <div className="ptf-post__content">
                  <header className="ptf-post__header">
                    <div className="ptf-post__meta">
                      <span className="cat">{item.category}</span>
                    </div>
                    <h3 className="ptf-post__title">
                      <Link>{item.title}</Link>
                    </h3>
                  </header>
                </div>
              </article>
            </div>
           </div>
        ))}
        {/* {projects && projects?.slice(0, visibleCards).map((val, i) => (
          <div className="col-lg-4" key={i}>
            <div className="grid-item">
              <article className="ptf-work ptf-work--style-1">
                <div className="ptf-work__media">
                  <Link className="ptf-work__link" to={`/case-details/${val.id}`}></Link>
                  <img
                    src={val.image}
                    alt="portfolio"
                    loading="lazy"
                    
                  />
                </div>
                <div className="ptf-work__meta">
                  <div className="ptf-work__category">{val.category}</div>
                  <h4 className="ptf-work__title">
                    <Link to={`/case-details/${val.id}`}>{val.title}</Link>
                  </h4>
                </div>
              </article>
            </div>
          </div>
        ))} */}
      {/* </Masonry> */}
    </>
  );
};

export default BlogMasonryGrid;
