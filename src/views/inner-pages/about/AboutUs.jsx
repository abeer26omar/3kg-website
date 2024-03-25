import React, {useState} from "react";
import { Helmet } from "react-helmet";
import Brand from "../../../components/brand/Brand";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import ServiceOne from "../../../components/service/ServiceOne";
import imageMask from '../../../assets/img/about-us-main-image-layer-1.png';
import { getAboutUs } from "../../../Util/http";
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { Link } from "react-router-dom";

const AboutUs = () => {

  const [serviceTitle, setServiceTitle] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');

  const { data: aboutUs } = useQuery({
    queryKey: ['aboutUs'],
    queryFn: getAboutUs
  });


  const getServicevalues = (title, description) => {
    setServiceDescription(description);
    setServiceTitle(title)
  }

  return (
    <div className="ptf-site-wrapper animsition  ptf-is--about-us">
      <Helmet>
        <title>Audio Technology - About Us</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--about-us">
            {/*=============================================
                Start About Us Hero Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="">Audio Technology</h1>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.8125rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-30 fw-bold text-uppercase has-3-color">
                        Digital solutions for <br />
                        your business
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                    ></div>
                    <div className="row">
                      <div className="col-xl-8">
                        <div style={{ maxWidth: "29.6875rem" }}>
                          {/* <!--Animated Block--> */}
                          <div
                            className="ptf-animated-block"
                            data-aos="fade"
                            data-aos-delay="200"
                          >
                            {/* <!--Divider--> */}
                            <div className="ptf-divider"></div>
                            {/* <!--Spacer--> */}

                            <div
                              className="ptf-spacer"
                              style={{
                                "--ptf-xxl": "4.375rem",
                                "--ptf-md": "2.1875rem",
                              }}
                            ></div>
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(aboutUs?.content) }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "5.625rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <div className="text-center">
                        {/* <!--Mask Image--> */}
                        <div className="ptf-mask-image">
                          <img
                            src={aboutUs?.main_image}
                            alt="layer"
                            loading="lazy"
                            className="lay2"
                            style={{
                              zIndex: "1",
                              height: '716px'
                            }}
                            srcSet={aboutUs?.main_image}
                          />
                          {/* <img
                            src={imageMask}
                            alt="layer"
                            loading="lazy"
                            style={{ zIndex: "2" }}
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            {/*=============================================
                Start Service Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-3">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">
                        {serviceTitle}
                      </h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem" }}
                      ></div>
                      <p className="fz-18">
                        {serviceDescription}
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-lg": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                  </div>
                  <div className="col-lg-8 offset-lg-1">
                    <ServiceOne getServicevalues={getServicevalues}/>
                  </div>
                </div>
                {/* End .row */}
              </div> 
              {/* End .container-xxl */}
            </section>
            {/* End service */}

            {/*=============================================
                Start Brand and Counterup Section
              ============================================== */}
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
              <div className="row align-items-center">
                  <div className="col-lg-9 col-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading d-inline-flex">
                          Partners
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6 d-flex justify-content-end">
                    {/* <!--Animated Block--> */}
                    <Link
                      className="
                          ptf-link-with-arrow
                          fz-18
                          text-uppercase
                          fw-semibold
                          has-black-color
                          d-inline-flex
                        "
                      to="/brands"
                    >
                      <span className="d-sm-block d-none">All Partners</span> <i className="lnil lnil-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6rem", "--ptf-md": " 3.75rem" }}
                ></div>
                <Brand />
                {/* <div className="row">
                  <div className="col-12">
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
                    ></div>
                    <div className="ptf-divider"></div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                    ></div>
                  </div>
                </div>

                <Counter /> */}
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Jaralax Testimonial Section
              ============================================== */}
            {/* <section
              className="jarallax jarallax-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "assets/img/about-us-testimonial-background.png"
                })`,
              }}
            >
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-4">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <img
                        src="assets/img/root/quote.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "3.75rem" }}
                    ></div>
                  </div>
                  <div className="col-xl-8">
                    <Testimonial />
                  </div>
                </div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
            </section> */}

            {/*=============================================
                Start Award Section
              ============================================== */}
            {/* <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "11.875rem", "--ptf-md": "5.9375rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-4">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">
                        Our
                        <br />
                        Awards
                      </h2>
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-lg": "3.75rem" }}
                    ></div>
                  </div>
                  <div className="col-lg-8">
                    <Award />
                  </div>
                </div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section> */}
          </div>
        </div>
        {/* End ptf-main */}

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
    </div>
  );
};

export default AboutUs;
