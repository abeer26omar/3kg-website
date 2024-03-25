import React from "react";
import { useQuery } from '@tanstack/react-query';
import { getNews } from '../../Util/http';
import { Link } from "react-router-dom";


const Approach = () => {

  const { data: news } = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(true, 1)
  });

  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "3.75rem",
        "--bs-gutter-y": "7.5rem",
      }}
    >
      {news && news?.items.slice(0, 3).map((val, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={(i * 100).toString()}
          >
            {/* <!--Approach Box--> */}
            <div
              className="ptf-approach-box ptf-work--style-3"
              style={{
                "--ptf-title-color": "var(--ptf-accent-2)",
              }}
            >
              {(val?.category && val?.category !== '') && (<div className="ptf-approach-box__subtitle">{val?.category}</div>)}
              <h4 className="ptf-approach-box__title ptf-work__title">
                <Link to={`/news-details/${val?.id}`}>
                  {val?.title}
                </Link>
              </h4>
              <div className="ptf-approach-box__content">
                <p>{val?.brief}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Approach;
