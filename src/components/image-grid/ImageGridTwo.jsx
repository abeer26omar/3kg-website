import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const ImageGridTwo = ({other_images}) => {
  return (
    <Gallery>
      <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
        {other_images && other_images.map((val, i) => (
          <div className="col-6" key={i}>
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay={val.delayAnimation}
            >
              {/* <!--Simple Image--> */}
              <div className="ptf-simple-image">
                <Item
                  original={val}
                  thumbnail={val}
                  
                >
                  {({ ref, open }) => (
                    <img
                      src={val}
                      alt="service"
                      role="button"
                      ref={ref}
                      onClick={open}
                      style={{
                        height: '509px',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </Item>
              </div>
              {/* End  .ptf-simple-image */}
              <div className="ptf-simple-image-caption">
                Image by Audio Technology
                <a href={val.link} target="_blank" rel="noopener noreferrer">
                  {/* {val.imageOwner} */}
                </a>
              </div>
              {/* End .ptf-simple-image-caption */}
            </div>
          </div>
        ))}
      </div>
    </Gallery>
  );
};

export default ImageGridTwo;
