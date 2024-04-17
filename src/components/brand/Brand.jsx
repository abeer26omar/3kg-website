import React, { useState } from "react";
import BrandModal from "./BrandModal";
import { useQuery } from "@tanstack/react-query";
import { getPartners } from "../../Util/http";
import Slider from "react-slick";

const Brand = () => {
  const [openModal, setOpenModal] = useState(false);
  const [brand, setBrand] = useState({});

  const closeModal = () => setOpenModal(false);

  const { data: partners } = useQuery({
    queryKey: ["ourPartners"],
    queryFn: () => getPartners(1),
  });

  const onOpenModal = (brandObj) => {
    setOpenModal(true);
    setBrand(brandObj);
  };

  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 6,
    centerPadding: "40px",
    slidesToScroll: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // "--ptf-image-height": "85px",
    <>
      <div className="slider_brand" style={{ "--bs-gutter-y": "2rem" }}>
        <Slider {...settings}>
          {partners &&
            partners?.items.map((item, i) => (
              <div className="px-2" key={i} onClick={() => onOpenModal(item)}>
                {/* <!--Animated Block--> */}
                <div className="ptf-animated-block" data-aos="fade">
                  {/* <!--Partner Box--> */}
                  <div
                    className="ptf-partner-box"
                    style={{
                      "--ptf-hover-background": "#fcf8f4",
                      "--ptf-image-height": "auto",
                    }}
                  >
                    <div className="ptf-partner-box__image">
                      <img
                        src={item.logo}
                        style={{
                          "max-height": "85px",
                          "max-width": "176px",
                        }}
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>
                    <h6 className="ptf-partner-box__title">{item.name}</h6>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <BrandModal show={openModal} onHide={closeModal} brand={brand} />
    </>
  );
};

export default Brand;
