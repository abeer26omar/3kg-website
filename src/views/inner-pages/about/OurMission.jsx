import DOMPurify from 'dompurify';
import img from '../../../assets/img/home/default/post-1.png';

const OurMission = ({mission}) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">
                        Our Mission <br />
                      </h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "6rem" }}
                      ></div>
                      <div className="fz-18" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(mission) }}></div>
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
                  <div className="col-lg-6">
                    <img
                        src={img}
                        alt="mission"
                        loading="lazy"
                    />
                  </div>
            </div>
        </>
    )
}
export default OurMission;