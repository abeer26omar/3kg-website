import React from "react";

const SocialShare = [
  {
    iconName: "socicon-twitter",
    link: "https://twitter.com/",
    iconClass: "twitter",
  },
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/",
    iconClass: "facebook",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/",
    iconClass: "instagram",
  },
  {
    iconName: "socicon-pinterest",
    link: "https://www.pinterest.com/",
    iconClass: "pinterest",
  },
];
const Social = ({social}) => {

  const getIconClass = (type) => {
    switch (type) {
      case 'Facebook' :
        return 'facebook';
      case 'X' :
        return 'twitter';
      case 'INSTAGRAM' :
        return 'instagram';
      case 'LinkedIn' :
        return 'linkedin';
      default: 
        return '';  
    }
  };

  const getIconName = (type) => {
    switch (type) {
      case 'Facebook' :
        return 'socicon-facebook';
      case 'X' :
        return 'socicon-twitter';
      case 'INSTAGRAM' :
        return 'socicon-instagram';
      case 'LinkedIn' :
        return 'socicon-linkedin';
      default: 
        return '';  
    }
  }

  return (
    <div className="ptf-offcanvas-menu__socials">
      {/* <!--Social Icon--> */}
      {social && social.map((icon, i) => (
        <a
          className={`ptf-social-icon ptf-social-icon--style-3 ${getIconClass(icon.type)}`}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <i className={getIconName(icon.type)}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
