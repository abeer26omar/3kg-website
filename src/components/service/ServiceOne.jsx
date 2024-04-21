import React, { useEffect } from "react";
import { getHomeSystem } from "../../Util/http";
import { useQuery } from "@tanstack/react-query";

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

const ServiceOne = ({ getServicevalues }) => {
  const { data: ourSystems } = useQuery({
    queryKey: ["ourSystems"],
    queryFn: () => getHomeSystem(),
  });

  // useEffect(()=>{
  //   if(getServicevalues){
  //     getServicevalues(ourServices?.title, ourServices?.description)
  //   }

  // },[ourServices]);

  return (
    <>
      {/* {ourSystems &&
        ourSystems?.map((val, i) => (
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
            key={i}
          >
   
            <div className="ptf-service-box gap-2">
              <div className="">
  
                <img src={val.icon} alt={val.title} loading="lazy" />
              </div>
              <h5 className="ptf-service-box__title">
                {val.title} <br />
              </h5>
              <div className="ptf-service-box__content">
                <p>{val.description}</p>
              </div>

            </div>
          </div>
        ))} */}

      <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
        {ourSystems &&
          ourSystems?.map((item, index) => {
            return (
              <div
                className="col d-flex flex-column justify-content-center align-items-center text-center system"
                key={index}
              >
                <div className="icon_box mb-3">
                  <div className="inner_box">
                    <img src={item.icon} alt={item.title} loading="lazy" />
                  </div>
                </div>
                <h2>{item.title}</h2>
                <p className="mt-5" style={{ minHeight: "210px" }}>
                  {item.description}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ServiceOne;
