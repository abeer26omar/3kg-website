import React from "react";
import { Link } from "react-router-dom";

const PortfolioSix = ({caseStudies}) => {

  return (
    <>
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
        ></div>
        <div className="row g-5">
          {caseStudies && caseStudies?.items.slice(0, 4).map((item, i) => (
              <div
                className="col-lg-6 ptf-animated-block"
                data-aos="fade"
                data-aos-delay={(i * 100).toString()}
              >
                <div
                  className="ptf-isotope-grid row"
                  style={{
                    "--bs-gutter-x": "4.75rem",
                    "--bs-gutter-y": "4.75rem",
                  }}
                >
                    <div className="" key={i}>
                      <article className="ptf-work ptf-work--style-1">
                        <div className="ptf-work__media">
                          <Link
                            className="ptf-work__link"
                            to={`/case-details/${item.id}`}
                          ></Link>
                          <img
                            src={item.main_image}
                            alt={item.title}
                            loading="lazy"
                            style={{
                              height: '500px'
                            }}
                          />
                        </div>
                        <div className="ptf-work__meta">
                          <div className="ptf-work__category">
                            {item.category}
                          </div>
                          <h4 className="ptf-work__title">
                            <Link to={`/case-details/${item.id}`}>{item.title}</Link>
                          </h4>
                        </div>
                      </article>
                    </div>
                  {/* {item.tabContent.map((singleItem, i) => (
                  ))} */}
                  {/* End .col */}
                </div>
              </div>
          ))}
        </div>
    </>
  );
};

export default PortfolioSix;
