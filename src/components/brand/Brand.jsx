import React, { useState } from "react";
import BrandModal from "./BrandModal";
import { useQuery } from '@tanstack/react-query';
import { getPartners } from '../../Util/http';


const brandContent = [
  {
    delayAnimation: "0",
    hoverBg: "#fcf8f4",
    imgHeight: "85px",
    imgName: "image-1",
    title: "Zeplin",
  },
  {
    delayAnimation: "100",
    hoverBg: "#f3f7fc",
    imgHeight: "78px",
    imgName: "image-2",
    title: "Dropbox",
  },
  {
    delayAnimation: "200",
    hoverBg: "#f9fcf3",
    imgHeight: "90px",
    imgName: "image-3",
    title: "Shopify",
  },
  {
    delayAnimation: "300",
    hoverBg: "#f9f9f9",
    imgHeight: "90px",
    imgName: "image-4",
    title: "Slack",
  },
  {
    delayAnimation: "400",
    hoverBg: "#fdf4fb",
    imgHeight: "62px",
    imgName: "image-5",
    title: "WooCommerce",
  },
  {
    delayAnimation: "500",
    hoverBg: "#fdf4fb",
    imgHeight: "77px",
    imgName: "image-6",
    title: "InvisionApp",
  },
];

const Brand = () => {

  const [openModal, setOpenModal] = useState(false);
  const [brand, setBrand] = useState({})

  const closeModal = () => setOpenModal(false);

  
  const { data: partners } = useQuery({
    queryKey: ['ourPartners'],
    queryFn: () => getPartners(1)
  });

  const onOpenModal = (brandObj) => {
    setOpenModal(true);
    setBrand(brandObj);
  }

  return (
    <>
      <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
          {partners && partners?.items.slice(0, 6).map((item, i) => (
            <div className="col-6 col-md-3 col-lg-2" key={i} onClick={() => onOpenModal(item)}>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay={(i * 100).toString()}
              >
                {/* <!--Partner Box--> */}
                <div
                  className="ptf-partner-box"
                  style={{
                    "--ptf-hover-background": '#fcf8f4',
                    "--ptf-image-height": '85px',
                  }}
                >
                  <div className="ptf-partner-box__image">
                    <img
                      src={item.logo}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                  <h6 className="ptf-partner-box__title">{item.name}</h6>
                </div>
              </div>
            </div>
          ))}
      </div>
      <BrandModal 
        show={openModal}
        onHide={closeModal}
        brand={brand}
      />
    </>
  );
};

export default Brand;
