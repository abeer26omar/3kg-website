import React from "react";
import SocialTwo from "../../social/SocialTwo";
import { Link } from "react-router-dom";
import logo from '../../../assets/img/root/Logos/Logo all versions-03.png';
import threekg from '../../../assets/img/Developed with LOVE by 3KG-black.png';

const CopyRight = () => {
  return (
    <div className="row align-items-center justify-content-sm-between justify-content-center">
      <div className="col-md-4 col-12 d-flex justify-content-sm-start justify-content-center">
        <Link to="/">
          <img src={logo} alt="audio tech" loading="lazy" width={'164px'} />
        </Link>
      </div>
      <div className="col-md-4 col-12 d-flex justify-content-center">
        <p className="mb-0" style={{
          color: '#000'
        }}>Developed by
          <a href="https://threekg.com/" target="_blank" className="ms-2">
            <img src={threekg} alt="threekg-logo"/>
          </a>
        </p>
      </div>
      <div className="col-md-4 col-12 d-flex justify-content-sm-end justify-content-center">
        <div className="ptf-footer-socials has-black-color">
          <SocialTwo />
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
