import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BlogMasonryGrid from "../../../components/blog/BlogMasonryGrid";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import { useQuery } from '@tanstack/react-query';
import { getProjects } from "../../../Util/http";

const BlogMasonry = () => {
  
  const [page, setPage] = useState(1);

  const { data: projects } = useQuery({
    queryKey: ['projects', page],
    queryFn: () => getProjects(page),
  });
  const [paginatedProjects, setPaginatedProjects] = useState([]);

  const handleShowMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  useEffect(()=>{
    if (projects?.items) {
      setPaginatedProjects(prevProjects => [...prevProjects, ...projects?.items]);
    }
  },[projects])

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Audio Technology - Projects</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div className="ptf-page ptf-page--blog-masonry">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">Projects</h1>
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
            </section>
            {/* End blog-title */}

            {/*=============================================
            Start Blog Grid section
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.25rem", "--ptf-md": "2.125rem" }}
              ></div>
              <div className="container-xxl container-xxl--custom">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div className="ptf-isotope-grid row g-xl-5 g-3">
                    <BlogMasonryGrid projects={paginatedProjects} />
                  </div>
                </div>
                {/* End .ptf-animated-block */}

                {/* <!--Spacer--> */}

               {(projects?.count > 30 && projects?.items.length > 0) && (<div className="text-center">
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                  ></div>
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
                {/* End More Blog btn */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>
              </div>
              {/* End .container-xxl */}
            </section>
            {/* End blog gird */}

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
            {/* End continaer devider */}
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

export default BlogMasonry;
