import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const ImageGridThree = ({caseImages}) => {

  return (
    <Gallery>
      <div
        className="ptf-justified-gallery row"
        style={{
          "--bs-gutter-x": "2rem",
          "--bs-gutter-y": "2rem",
        }}
      >
        {caseImages && caseImages?.map((val, i) => (
          <div className={`col-lg-${i === caseImages.length - 1 ? '12' : '6'}`} key={i}>
            <div className="ptf-gallery__item">
              <div className="ptf-simple-image">
                <Item
                  original={val}
                  thumbnail={val}
                  width='800'
                  height='800'
                >
                  {({ ref, open }) => (
                    <img
                      src={val}
                      alt="works gallery"
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
            </div>
          </div>
        ))}
      </div>
    </Gallery>
  );
};

export default ImageGridThree;
