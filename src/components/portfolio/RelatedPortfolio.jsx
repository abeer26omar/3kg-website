import React from "react";
import { Link } from "react-router-dom";

const RelatedPortfolio = ({caseStudies, visibleCards={visibleCards}}) => {

  return (
    <>
      {caseStudies && caseStudies?.slice(0, visibleCards).map((val, i) => (
        <div className="col-lg-4" key={i}>
          <div className="grid-item">
            {/* <!--Portfolio Item--> */}
            <article className="ptf-work ptf-work--style-1">
              <div className="ptf-work__media">
                <Link className="ptf-work__link" to={`/case-details/${val.id}`}></Link>
                <img
                  src={val.main_image}
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
      ))}
    </>
  );
};

export default RelatedPortfolio;
