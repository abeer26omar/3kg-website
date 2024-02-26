import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import HeaderDefault from "../../../components/header/HeaderDefault";
import { useQuery } from '@tanstack/react-query';
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import Social from "../../../components/social/Social";
import WorksCaseStudy from "./WorksCaseStudy";
import ImageGridThree from "../../../components/image-grid/ImageGridThree";
import { getCaseDetails } from "../../../Util/http";
import ModalVideo from "react-modal-video";
import DOMPurify from 'dompurify';

const WorksShowcase = () => {

  const { id } = useParams();
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const { data: caseDetilas } = useQuery({
    queryKey: ['caseDetails', id],
    queryFn: () => getCaseDetails(id)
  });

  useEffect(()=>{
    if(caseDetilas){
        const regex = /youtu\.be\/([^?]+)/;
        const match = caseDetilas?.video_link.match(regex);
        const videoId = match && match[1];
        setVideoId(videoId)
    }
  },[caseDetilas, id])

  return (
    <>
      <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>Audio Technology - case details</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-page ptf-page--single-work-1">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">
                        {caseDetilas && caseDetilas?.title}
                      </h1>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "4rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      {/* <Social social={caseDetilas?.social_media} /> */}
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
                  {/* End .col */}
                  <div className="col-xl-6">
                    <WorksCaseStudy 
                      client_name={caseDetilas?.client_name}
                      services={caseDetilas?.services}
                    />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.25rem", "--ptf-md": "1rem" }}
              ></div>
            </section>

            {(caseDetilas?.main_image && caseDetilas?.main_image !== '') && (<section>
              <div className="container-xxl">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div className="ptf-simple-image">
                    <a
                      href="assets/img/portfolio/single-work/content-image-1.png"
                      rel="nofollow"
                    >
                      <img
                        src={caseDetilas?.main_image}
                        alt="work"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>)}

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(caseDetilas?.description) }}></div>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                ></div>

                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>

                {(caseDetilas?.video_link && caseDetilas?.video_link !== '') && (<section
                  className="jarallax jarallax-img"
                  style={{
                    backgroundImage: `url(${caseDetilas?.other_images[0]})`,
                    textAlign: 'center',
                    filter: 'grayscale(60%)'
                  }}
                >
                  <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
                    ></div>

                  <div
                    className="ptf-video-button"
                    onClick={() => setOpen(true)}
                    style={{
                      "--ptf-title-color": "var(--ptf-color-white)",
                      marginLeft: "2rem",
                    }}
                  >
                    <a href="#" rel="nofollow">
                      <i className="lnil lnil-play"></i>
                    </a>
                    <div className="ptf-video-button__title">
                      View case story
                    </div>
                  </div>
                  <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
                    ></div>
                </section>)}                
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>Gallery</h2>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Gallery--> */}
                  <ImageGridThree caseImages={caseDetilas?.other_images} />
                </div>

                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
              </div>
            </section>

            <section>
              {/* <!--Post Navigation--> */}
            </section>
          </article>
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
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </>
    
  );
};

export default WorksShowcase;
