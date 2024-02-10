import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


const Counter = ({statistics}) => {

  const counterUpContent = [
    {
      startCount: "0",
      endCount: statistics?.employees,
      metaText1: "Employees",
      animationDelay: "0",
    },
    {
      startCount: "0",
      endCount: statistics?.projects,
      metaText1: "Projects",
      animationDelay: "100",
    },
    {
      startCount: "0",
      endCount: statistics?.brands,
      metaText1: "Brands",
      animationDelay: "200",
    }
  ];

  const [focus, setFocus] = React.useState(false);
  return (
    <div className="row justify-content-center" style={{ "--bs-gutter-y": "2rem" }}>
      {counterUpContent.map((val, i) => (
        <div className="col-6 col-lg-3 d-flex justify-content-center" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block text-center"
            data-aos="fade"
            data-aos-delay={val.animationDelay}
          >
            {/* <!--Counter Up--> */}
            <div className="ptf-counter-up ptf-counter-up--style-1">
              <div className="ptf-counter-up__value">
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={1}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
              <h5 className="ptf-counter-up__title">
                {val.metaText1} <br />
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
