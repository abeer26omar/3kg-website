import React from "react";
import { Link } from "react-router-dom";

const BlogMasonryGrid = ({projects}) => {
  return (
    <>
        {projects && projects.map((item, i) => (
           <div className="col-lg-4 col-md-6 col-12 h-100" key={i}>
            <div className="grid-item">
              <article className="ptf-post ptf-post--style-2">
                <div className="ptf-post__media">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    loading="lazy"
                    style={{
                      height: '336px',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="ptf-post__media__content">
                    <header className="ptf-post__header">
                      <div className="ptf-post__meta">
                        <span className="cat">{item?.category}</span>
                      </div>
                      <h3 className="ptf-post__title">{item?.title}</h3>
                    </header>
                  </div>
                </div>
              </article>
            </div>
           </div>
        ))}
    </>
  );
};

export default BlogMasonryGrid;
