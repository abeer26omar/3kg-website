import React from "react";


const WorksCaseStudy = ({services, client_name}) => {
  return (
    <>
      <div className="row">
          {client_name && (<div className="col-xl-6">
            <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
                <div
                  className="ptf-animated-block mb-70"
                  data-aos="fade"
                  data-aos-delay='100'
                >
                  <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                    {'CLIENT'}
                  </h5>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.25rem" }}
                  ></div>
                  <p className="fz-20 lh-1p5 has-black-color">
                    {client_name} <br />
                  </p>
                </div>
            <div
                  className="ptf-spacer"
                  style={{
                    "--ptf-xxl": " 4.375rem",
                    "--ptf-md": "2.1875rem",
                  }}
            ></div>
          </div>)}
          {(services && services.length !== 0) && (<div className="col-xl-6">
            {/* <!--Spacer--> */}
            <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
            {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block mb-70"
                  data-aos="fade"
                  data-aos-delay='100'
                >
                  <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                    {'Services'}
                  </h5>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.25rem" }}
                  ></div>
                  <p className="fz-20 lh-1p5 has-black-color">
                    {services.join(", ")} <br />
                    
                  </p>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{
                    "--ptf-xxl": " 4.375rem",
                    "--ptf-md": "2.1875rem",
                  }}
                ></div>
          </div>)}
      </div>
    </>
  );
};

export default WorksCaseStudy;
