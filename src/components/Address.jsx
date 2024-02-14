import React from "react";

const Address = ({contacts}) => {
  return (
    <>
    {contacts && contacts?.map((item, i)=>{
      return(
        <>
          <div className="ptf-animated-block" data-aos="fade" data-aos-delay={(i * 100).toString()} key={i}>
            <h5 className="fz-14 text-uppercase has-3-color fw-normal">{item.name}</h5>
            {/* <!--Spacer--> */}
            <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
            <p className="fz-20 lh-1p5 has-black-color">
              {item.value}
            </p>
          </div>

          {/* <!--Spacer--> */}
          <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>
        </>
      )
    })}

    </>
  );
};

export default Address;
