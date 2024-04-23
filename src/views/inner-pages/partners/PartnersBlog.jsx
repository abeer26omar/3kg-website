import React, { useState } from "react";
import BrandModal from "../../../components/brand/BrandModal";

const PartnersBlog = ({ partners }) => {
  const [openModal, setOpenModal] = useState(false);
  const [brand, setBrand] = useState({});

  const closeModal = () => setOpenModal(false);

  const onOpenModal = (brandObj) => {
    setOpenModal(true);
    setBrand(brandObj);
  };
  return (
    <>
      {partners &&
        partners.map((item, i) => (
          <div className="col-lg-4 col-md-6 col-12 h-100" key={i}>
            <div
              className="ptf-animated-block"
              data-aos="fade"
              onClick={() => onOpenModal(item)}
            >
              {/* <!--Partner Box--> */}
              <div
                className="ptf-partner-box"
                style={{
                  "--ptf-hover-background": "#fcf8f4",
                  "--ptf-image-height": "85px",
                }}
              >
                <div className="ptf-partner-box__image">
                  <img
                    src={item.logo}
                    alt={item.name}
                    loading="lazy"
                    style={{
                      "max-height": "85px",
                      "max-width": "120px",
                    }}
                  />
                </div>
                <h6 className="ptf-partner-box__title">{item.name}</h6>
              </div>
            </div>
          </div>
        ))}
      <BrandModal show={openModal} onHide={closeModal} brand={brand} />
    </>
  );
};

export default PartnersBlog;
