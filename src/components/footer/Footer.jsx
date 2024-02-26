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
    </div>
  );
};

export default Footer;
