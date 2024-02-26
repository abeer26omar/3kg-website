import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useQuery } from '@tanstack/react-query';
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import ImageGridTwo from "../../../components/image-grid/ImageGridTwo";
import { getNewsDetails } from "../../../Util/http";
import DOMPurify from 'dompurify';
import placeHolder from '../../../assets/img/home/agency/main-slide-2.png';
import ModalVideo from "react-modal-video";

const BlogDetails = () => {
  
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const { id } = useParams();

  const { data: newsDetails } = useQuery({
    queryKey: ['newsDetails', id],
    queryFn: () => getNewsDetails(id)
  });

  useEffect(()=>{
    if(newsDetails){
        const regex = /youtu\.be\/([^?]+)/;
        const match = newsDetails?.video_link.match(regex);
        const videoId = match && match[1];
        setVideoId(videoId)
    }
  },[newsDetails, id])

  return (
    <>  
      <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Audio Technology - News Details</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-single-post">
            {/* <!--Post Header--> */}
            <header className="ptf-single-post__header ptf-single-post__header--style-1">
              <div className="container-xxl">
                <h1 className="ptf-single-post__title">
                  {newsDetails?.title}
                </h1>
                <div className="ptf-single-post__meta">
                  {/* <span className="cat">{newsDetails?.}</span> */}
                  {/* <span className="date">Dec 7, 2021</span> */}
                </div>
              </div>
            </header>

            {/* <!--Post Media--> */}
            {(newsDetails?.main_image && newsDetails?.main_image !== '') && (<div className="ptf-single-post__media">
              <div className="container-xxl">
                <img
                  src={newsDetails?.main_image}
                  alt="blog post"
                  loading="lazy"
                />
              </div>
            </div>)}

            {/* <!--Post Wrapper--> */}
            <div className="ptf-single-post__wrapper">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-8 offset-xl-2">
                    {/* <!--Post Info--> */}

                    {/* <!--Post Excerpt--> */}
                    <div className="ptf-single-post__excerpt">
                      {newsDetails?.brief}
                    </div>

                    {/* <!--Post Content--> */}
                    <div className="ptf-single-post__content">
                      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(newsDetails?.description) }}></div>
                    </div> 
                  </div>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>

                      {(newsDetails?.video_link && newsDetails?.video_link !== '') && (<section
                          className="jarallax jarallax-img"
                          style={{
                            backgroundImage: `url(${newsDetails?.other_images[0] ? newsDetails?.other_images[0] : placeHolder})`,
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
                          View News
                        </div>
                      </div>
                        {/* <!--Spacer--> */}
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
                          ></div>
                      </section>)}

                      <ImageGridTwo other_images={newsDetails?.other_images} />
                </div>
              </div>
            </div>
          </article>
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

export default BlogDetails;
