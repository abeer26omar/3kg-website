import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./menu/DropdownMenu";
import MobileMenu from "./menu/MobileMenu";
// import logo from '../../assets/img/root/Logos/newcolordarklogo3.svg';
// import logo from '../../assets/img/root/Logos/newcoloreddarklogo2.svg';
import logo from '../../assets/img/root/Logos/Logo all versions-01.png';
import logoWhite from '../../assets/img/root/Logos/Logo all versions-04.png';

const HeaderHomeDefault = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className="ptf-header ptf-header--style-3">
        <div
          className={
            navbar
              ? "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--fixed"
              : "ptf-navbar ptf-navbar--main ptf-navbar--sticky"
          }
        >
          <div className="container-xxl">
            <div className="ptf-navbar-inner">
              {/* <!--Logo--> */}
              <Link className="ptf-navbar-logo" to="/">
                <img
                  className="black"
                  src={logo}
                  alt="Logo-audio Tech"
                  loading="lazy"
                  width={'164px'}
                />
                <img
                  className="white"
                  src={logoWhite}
                  alt="Logo-audio Tech"
                  loading="lazy"
                  width={'164px'}
                />
              </Link>
              {/* <!--Navigation--> */}
              <nav className="ptf-nav ptf-nav--default mx-auto">
                {/* <!--Menu--> */}
                <DropdownMenu />
              </nav>
              {/* <!--Buttons--> */}
              <div className="d-flex align-items-center">
                  <a
                    href="https://audioteceg.com/"
                    target="_blank"
                    className="py-3 px-4 ptf-btn ptf-btn--primary">
                    Retail
                  </a>
                
              </div>
              {/* <!--Offcanvas Menu Toggle--> */}

              <div
                className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right"
                onClick={handleClick1}
                style={{
                  position: 'relative'
                }}
              >
                <i className="lnir lnir-menu-alt-5"></i>
              </div>
              {/* Toggle bar icon */}
            </div>
          </div>
        </div>
      </header>
      {/* End header */}

      <div
        className={
          click1 ? "ptf-offcanvas-menu is-open" : "ptf-offcanvas-menu "
        }
      >
        <div className="ptf-offcanvas-menu__header justify-content-end">
          <span
            className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle"
            onClick={handleClick1}
          >
            <i className="lnir lnir-close"></i>
          </span>
        </div>
        {/* End .ptf-offcanvas-menu__header */}

        <MobileMenu />
      </div>
      {/* End sidebar menu */}
    </>
  );
};

export default HeaderHomeDefault;
