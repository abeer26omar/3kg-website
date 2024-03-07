import React from "react";
import {Link} from 'react-router-dom';
import audiologo from '../../assets/img/root/Logos/whiteaudiotech.svg';

const HeroDefault = ({landingData}) => {
  const heroContent = {
    title: "AudioTech",
    subTitle1: "Committed to excellence",
    subTitle2: '',
    subTitleDescription1: landingData.title,
    detailsDescription: landingData.description,
  };
  return (
    <div className="row">
      <div className="col-xl-9">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <img src={audiologo} alt="audio technology" width={'164px'}/>
          <div className="ptf-spacer" style={{ "--ptf-xxl": "0.625rem" }}></div>
          {/* <h1 className="fz-230 fz-230--xxl fz-130--lg fz-60--md has-white-color">{heroContent.title}</h1> */}
        </div>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.625rem" }}></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <p
            className="
                fz-90
                fz-40--md
                fw-bold
                lh-1p1
                has-white-color
              "
          >
            {heroContent.subTitle1} <br />
            {heroContent.subTitle2}
          </p>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{
            "--ptf-xxl": "11.375rem",
            "--ptf-md": "6.6875rem",
          }}
        ></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <p
            className="
              fz-60
              fw-bold
              lh-1p3
              text-uppercase
              has-white-color
            "
          >
            {heroContent.subTitleDescription1} <br />
          </p>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{
            "--ptf-xxl": "4.375rem",
            "--ptf-md": "2.1875rem",
          }}
        ></div>
        <div className="row">
          <div className="col-xl-8">
            <div style={{ maxWidth: "545px" }}>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                {/* <!--Divider--> */}
                <div className="ptf-divider ptf-divider-white"></div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{
                    "--ptf-xxl": "4.375rem",
                    "--ptf-md": "2.1875rem",
                  }}
                ></div>
                <p className="fz-24 has-white-color">
                  {heroContent.detailsDescription}
                </p>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{
                  "--ptf-xxl": "6.875rem",
                  "--ptf-md": "3.4375rem",
                }}
              ></div>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--primary ptf-btn--inversed"
                  to="/about-us"
                  title="about audio techology"
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-xl-3 d-none d-xl-block">
        <div className="ptf-spacer" style={{ "--ptf-xxl": "3.75rem" }}></div>
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-mask-image" style={{ maxWidth: "18.25rem" }}>
            <img
              className="spin"
              src="assets/img/root/home-default/circle-text.png"
              alt=""
              loading="lazy"
            />
            <img
              src="assets/img/root/home-default/circle-logo.png"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroDefault;
