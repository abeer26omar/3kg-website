import React from "react";
import SocialTwo from "../../social/SocialTwo";
import { Link } from "react-router-dom";
import logo from '../../../assets/img/root/Logos/Logo all versions-03.png';

const CopyRight = () => {
  return (
    <div className="row align-items-center justify-content-sm-between justify-content-center">
      <div className="col-md-6 col-12">
        <Link to="/">
          <img src={logo} alt="audio tech" loading="lazy" width={'151px'}/>
        </Link>
      </div>
      <div className="col-md-6 col-12 text-md-end">
        <div className="ptf-footer-socials has-black-color">
          <SocialTwo />
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
