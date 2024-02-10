import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const imageList = [
  {
    img: "assets/img/portfolio/single-work/content-image-2.png",
    column: "col-lg-6",
    alt: "image 1",
    width: "416",
    height: "335",
  },
  {
    img: "assets/img/portfolio/single-work/content-image-3.png",
    column: "col-lg-6",
    alt: "image 2",
    width: "416",
    height: "335",
  },
  {
    img: "assets/img/portfolio/single-work/content-image-4.png",
    column: "col-lg-12",
    alt: "image 3",
    width: "1296",
    height: "831",
  },
];

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
          <div className={'col-lg-6'} key={i}>
            <div className="ptf-gallery__item">
              <div className="ptf-simple-image">
                <Item
                  original={val}
                  thumbnail={val}
                  // width={val.width}
                  // height={val.height}
                >
                  {({ ref, open }) => (
                    <img
                      src={val}
                      alt="works gallery"
                      role="button"
                      ref={ref}
                      onClick={open}
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
