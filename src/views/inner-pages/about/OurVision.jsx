import DOMPurify from 'dompurify';
import img from '../../../assets/img/home/default/post-1.png';

const OurVision = ({vision, image}) => {
    return (
        <>
            <div className="row row_reverse justify-content-between g-3">
                <div className="col-lg-6 col-12">
                    <img
                        src={image}
                        alt="vision"
                        loading="lazy"
                    />
                </div>
                <div className="col-lg-6 col-12">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">
                        Our Vision <br />
                      </h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3rem" }}
                      ></div>
                      <div className="fz-18" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(vision) }}></div>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-lg": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                </div>
            </div>
        </>
    )
}
export default OurVision;