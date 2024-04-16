import React, { useEffect } from "react";
import { getHomeSystem } from '../../Util/http';
import { useQuery } from '@tanstack/react-query';

const serviceContent = [
  {
    icon: "lnil lnil-cup",
    titlePart1: "BRAND",
    titlePart2: "CONSULTANT",
    descriptions: ` We build and activate brands throung cultural insight &amp;
        strategic vision.`,
  },
  {
    icon: "lnil lnil-website-rank",
    titlePart1: "UI/UX",
    titlePart2: "SOLUTION",
    descriptions: ` We build and activate brands throung cultural insight &amp;
        strategic vision.`,
  },
  {
    icon: "lnil lnil-3d",
    titlePart1: "PACKAGING",
    titlePart2: "",
    descriptions: ` We build and activate brands throung cultural insight &amp;
        strategic vision.`,
  },
  {
    icon: "lnil lnil-video-camera-alt-1",
    titlePart1: "MOTION VIDEO",
    titlePart2: "& TVC",
    descriptions: ` We build and activate brands throung cultural insight &amp;
        strategic vision.`,
  },
];

const ServiceOne = ({getServicevalues}) => {

  const { data: ourSystems } = useQuery({
    queryKey: ['ourSystems'],
    queryFn: () => getHomeSystem()
  });
  
  // useEffect(()=>{
  //   if(getServicevalues){
  //     getServicevalues(ourServices?.title, ourServices?.description)
  //   }

  // },[ourServices]);

  return (
    <>
      {ourSystems && ourSystems?.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="0"
          key={i}
        >
          {/* <!--Services Box--> */}
          <div className="ptf-service-box gap-2">
            <div className="">
              {/* <i className={val.icon}></i> */}
              <img src={val.icon} alt={val.title} loading="lazy"/>
            </div>
            <h5 className="ptf-service-box__title">
              {val.title} <br />
            </h5>
            <div className="ptf-service-box__content">
              <p>{val.description}</p>
            </div>
            {/* <div className="ptf-service-box__arrow">
              <i className="lnil lnil-chevron-right"></i>
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceOne;
