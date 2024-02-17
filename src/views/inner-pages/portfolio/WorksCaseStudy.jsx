import React from "react";

const caseStudyContent = [
  {
    caseContent: [
      {
        dealyAnimation: "100",
        title: "CLIENT",
        subTitle1: `Paul Themes Company,
                `,
        subTitle2: "Russia",
        subTitle3: "",
      },
      {
        dealyAnimation: "200",
        title: "SERVICES",
        subTitle1: `UI/UX, Back-End,`,
        subTitle2: "Front-End, Graphic Design,",
        subTitle3: "Animation",
      },
    ],
  },
  {
    caseContent: [
      {
        dealyAnimation: "300",
        title: "TEAM",
        subTitle1: `LoganCee - UI/UX Designer
                `,
        subTitle2: "Pavel Suslov - Developer",
        subTitle3: "",
      },
      {
        dealyAnimation: "400",
        title: "DATE",
        subTitle1: `Feburary 25th, 2022`,
        subTitle2: "",
        subTitle3: "",
      },
    ],
  },
];

const WorksCaseStudy = ({services, team, client_name, date}) => {
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
          {(team && team.length !== 0) && (<div className="col-xl-6">
            <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
                <div
                  className="ptf-animated-block mb-70"
                  data-aos="fade"
                  data-aos-delay='100'
                >
                  <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                    {'Team'}
                  </h5>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.25rem" }}
                  ></div>
                  <p className="fz-20 lh-1p5 has-black-color">
                    {team.join(", ")} <br />
                    
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
          {date && (<div className="col-xl-6">
            {/* <!--Spacer--> */}
            <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
            {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block mb-70"
                  data-aos="fade"
                  data-aos-delay='100'
                >
                  <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                    {'Date'}
                  </h5>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.25rem" }}
                  ></div>
                  <p className="fz-20 lh-1p5 has-black-color">
                    {date} <br />
                    
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
