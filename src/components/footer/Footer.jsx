import React from "react";
import { Link } from "react-router-dom";
import NewsletterTwo from '../newsletter/NewsletterTwo';

const linkList = [
  {
    itemName: "About us",
    link: "/about-us",
  },
  {
    itemName: "Contact us",
    link: "/contact",
  }
];

const Footer = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div
            className="ptf-footer-heading has-black-color"
            style={{ maxWidth: "37.5rem" }}
          >
            Boost Your Business Up To High Level
          </div>

          <div className="ptf-footer-heading has-black-color">
            <p
              className="has-accent-1 text-decoration-underline"
              to="/contact"
            >
              Our NewsLetters
            </p>
          </div>
          <NewsletterTwo />

          {/* <p className="fz-24">90 Fairground Rd, FL 3290, United States</p>
          <a className="fz-40 has-black-color" href="mailto:hello@moonex.co">
            hello@moonex.co
          </a> */}
        </div>
      </div>
      <div className="col-12 col-md-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-black-color">
            <h4 className="ptf-widget-title">Links</h4>
            <ul>
              {linkList.map((val, i) => (
                <li key={i}>
                  <Link to={val.link}>{val.itemName}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="col-12 col-md-6 col-xl-3">
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <h4 className="ptf-widget-title">Product</h4>
            <div className="ptf-widget ptf-widget-links has-black-color">
              <ul>
                {Product.map((val, i) => (
                  <li key={i}>
                    <a href={val.link}>{val.itemName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
