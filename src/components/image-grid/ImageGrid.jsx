import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import img1 from '../../assets/img/image-0083.jpg';
import img2 from '../../assets/img/image-0084.jpg';


const ImageGrid = () => {

  const imageList = [
    { img: img1, delayAnimation: "0" },
    { img: img2, delayAnimation: "100" },
  ];

  return (
    <Gallery>
      <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
        {imageList.map((val, i) => (
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
                  original={val.img}
                  thumbnail={val.img}
                  width={636}
                  height={512}
                >
                  {({ ref, open }) => (
                    <img
                      src={val.img}
                      alt="gallery"
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

export default ImageGrid;
