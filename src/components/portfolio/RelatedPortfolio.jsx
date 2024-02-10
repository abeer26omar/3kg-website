import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { getCaseStudies } from '../../Util/http';

const portfolioContent = [
  { img: "work-1", categorie: "UI/UX", title: "Taskly Dashboard" },
  { img: "work-2", categorie: "Product", title: "Film & Art Festival" },
  {
    img: "work-3",
    categorie: "Branding, Packaging",
    title: "Dark Wishky Wine",
  },
  { img: "work-4", categorie: "Illustration", title: "Swiss Style Poster" },
  { img: "work-5", categorie: "UI/UX", title: "Liarch Architecture Firm" },
  {
    img: "work-6",
    categorie: "Branding, Packaging, Motion Video",
    title: "FG Print Brand",
  },
];

const RelatedPortfolio = () => {

  const { data: caseStudies } = useQuery({
    queryKey: ['caseStudies'],
    queryFn: () => getCaseStudies(false, 1)
  });

  return (
    <>
      {caseStudies && caseStudies?.items.map((val, i) => (
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
