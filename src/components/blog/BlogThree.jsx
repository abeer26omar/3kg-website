import React from "react";
import { Link } from "react-router-dom";

const BlogThree = ({news}) => {
  return (
    <>
      {news && news.map((val, i) => (
        <div className="col-xl-4 col-lg-4" key={i}>
          <article className="ptf-post ptf-post--style-1">
            <div className="ptf-post__media">
              <Link className="ptf-work__link" to={`/news-details/${val.id}`}></Link>
              <img
                src={val.main_image}
                alt={val.title}
                loading="lazy"
              />
            </div>
            <div className="ptf-post__content">
              <header className="ptf-post__header">
                {(val?.category && val?.category !== '') && (<div className="ptf-post__meta">
                  <span className="cat">{val.category}</span>
                </div>)}
                <h3 className="ptf-post__title">
                  <Link to={`/news-details/${val.id}`}>{val.title}</Link>
                </h3>
              </header>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default BlogThree;
