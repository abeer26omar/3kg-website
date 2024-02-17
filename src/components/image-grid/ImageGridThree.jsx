import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Masonry from "react-masonry-css";


const ImageGridThree = ({caseImages}) => {

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    768: 1,
    500: 1,
  };

  return (
    <Gallery>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {caseImages && caseImages?.map((val, i) => (
          <div className="grid-item" key={i}>
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
      </Masonry>
    </Gallery>
  );
};

export default ImageGridThree;
