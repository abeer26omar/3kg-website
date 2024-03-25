import React, {useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import { useQuery } from '@tanstack/react-query';
import { getNews } from "../../../Util/http";
import BlogGridSLider from "../../../components/blog/BlogGridSLider";
import BlogThree from "../../../components/blog/BlogThree";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";

const BlogGrid = () => {

  const [page, setPage] = useState(1);
  const [paginatedNews, setPaginatedNews] = useState([]);

  const { data: news } = useQuery({
    queryKey: ['news', 'all', page],
    queryFn: () => getNews(false, page)
  });

  useEffect(()=>{
    if (news?.items) {
      setPaginatedNews(prevNews => [...prevNews, ...news?.items]);
    }
  },[news, page])

  const handleShowMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Audio Technology - News</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div className="ptf-page ptf-page--blog-grid">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8rem", "--ptf-md": "4rem" }}
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
                      <h1 className="large-heading">News</h1>
                    </div>
                  </div>
                  {/* End .col */}
                  
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem" }}
                ></div>
              </div>
              {/* End .container-xxl */}
            </section>

            {/*=============================================
            Start Blog Grider section
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.25rem", "--ptf-md": "2.125rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div className="ptf-news-slider swiper-container">
                    <div className="swiper-wrapper">
                      <BlogGridSLider news={news}/>
                    </div>
                    {/* End swiper-wrapper */}
                  </div>
                </div>
                {/* End .ptf-animated-block */}
              </div>
              {/* End .container-xxl */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
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
            {/* End continaer devider */}

            {/*=============================================
            Start Blog Grid section
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
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
                      "--bs-gutter-x": "3rem",
                      "--bs-gutter-y": "3rem",
                    }}
                  >
                    <BlogThree news={paginatedNews} />
                  </div>
                </div>
                {/* End .ptf-animated-block */}

                {/* <!--Spacer--> */}

                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                  ></div>
                {(news?.count > 30 && news?.items.length > 0) && (<div className="text-center">
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

            {/* <section>
              <div className="container-xxl">
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>
              </div>
            </section> */}

            {/*=============================================
            Start Newsletter section
            ============================================== */}
            {/* <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "9.375rem", "--ptf-md": "4.6875rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">Newsletter</h1>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.25rem" }}
                      ></div>
                      <p>Get the latest news & insight.</p>
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-lg": "3.75rem", "--ptf-md": "1.875rem" }}
                    ></div>
                  </div>
                  <div className="col-lg-6 offset-lg-2">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <NewsletterTwo />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section> */}
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

export default BlogGrid;
