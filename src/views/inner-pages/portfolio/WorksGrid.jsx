import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import PortfolioSix from "../../../components/portfolio/PortfolioSix";
import RelatedPortfolio from "../../../components/portfolio/RelatedPortfolio";
import { useQuery } from '@tanstack/react-query';
import { getCaseStudies } from '../../../Util/http';

const WorksGrid = () => {

  const [page, setPage] = useState(1);
  const [paginatedWorks, setPaginatedWorks] = useState([]);

  const { data: caseStudies } = useQuery({
    queryKey: ['caseStudies'],
    queryFn : () => getCaseStudies(false, page),
  });
  
  const handleShowMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(()=>{
    if (caseStudies?.items) {
      setPaginatedWorks(prevWorks => [...prevWorks, ...caseStudies?.items]);
    }
  },[caseStudies])

  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-grid">
      <Helmet>
        <title>Audio Technology - case studies</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div className="ptf-page ptf-page--portfolio-grid">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-10">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">Case Studies</h1>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem" }}
                ></div>
              </div>
              {/* End .container-xxl */}

              {/*=============================================
                Start Portfolio main 
                ============================================== */}
              <div className="container-xxl">
                <PortfolioSix caseStudies={caseStudies} />
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
                ></div>
              </div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>
              </div>
            </section>

            {/*=============================================
            Start Portfolio More 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.0625rem" }}
              ></div>

              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "4rem",
                      "--bs-gutter-y": "5.75rem",
                    }}
                  >
                    <RelatedPortfolio caseStudies={paginatedWorks} />
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>
                {(caseStudies?.count > 30 && caseStudies?.items.length > 0) && (<div className="text-center">
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <a className="ptf-load-more" onClick={handleShowMore}>
                      More
                    </a>
                  </div>
                </div>)}
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          </div>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
    // End .ptf-is--blog-grid
  );
};

export default WorksGrid;
