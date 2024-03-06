import React from "react";
import { useQuery } from '@tanstack/react-query';
import { getSiteContacts } from '../../Util/http';

const SocialTwo = () => {

  const getIconName = (type) => {
    switch (type) {
      case 'Facebook' :
        return 'socicon-facebook';
      case 'YouTube' :
        return 'socicon-youtube';
      case 'Instagram' :
        return 'socicon-instagram';
      case 'LinkedIn' :
        return 'socicon-linkedin';
      default: 
        return '';  
    }
  }

  const { data: socialList } = useQuery({
    queryKey: ['social-list'],
    queryFn: getSiteContacts
  });

  return (
    <>
      {socialList && socialList?.social_media.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={getIconName(val.type)}></i>
        </a>
      ))}
    </>
  );
};

export default SocialTwo;
