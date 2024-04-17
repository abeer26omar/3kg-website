import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../components/header/HeaderDefault";
import CopyRight from "../../components/footer/copyright/CopyRight";
import Footer from "../../components/footer/Footer";
import Social from "../../components/social/Social";
import ContactForm from "../../components/ContactForm";
import Address from "../../components/Address";
import { useQuery } from "@tanstack/react-query";
import { getSiteContacts } from "../../Util/http";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 30.085176,
  lng: 31.333203,
};

const Contact = () => {
  const { data: siteContacts } = useQuery({
    queryKey: ["site-contacts"],
    queryFn: getSiteContacts,
  });

  return (
    <div>
      <Helmet>
        <title>Audio Technology - Contact</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--contact">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>

            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-10">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">
                      Contact Us
                      <br />
                    </h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3rem", "--ptf-md": "2.5rem" }}
                    ></div>

                    <Social social={siteContacts?.social_media} />
                    {/* <!--Social Icon--> */}
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* Contact top portion */}

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
          </section>
          {/* End section contact header */}

          <section>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-4">
                  <Address contacts={siteContacts?.contacts} />
                </div>
                {/* End .col 
                AIzaSyBmsTyEYsB5dCx2mclU1-T2s_gL9yLfwKs
                */}

                <div className="col-lg-8">
                  <div
                    className="ptf-animated-block contact_form"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                      Contact Us
                    </h5>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3.125rem" }}
                    ></div>
                    <ContactForm />
                    <div style={{ borderRadius: "12px", overflow: "hidden" }}>
                      <LoadScript googleMapsApiKey="AIzaSyBmsTyEYsB5dCx2mclU1-T2s_gL9yLfwKs">
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={10}
                        >
                          <Marker
                            position={center}
                            // Optional: Customize the marker
                            // icon={{
                            //   url: "path_to_custom_icon.png",
                            //   scaledSize: new window.google.maps.Size(50, 50)
                            // }}
                            // Optional: Add a title that appears on hover
                            title="AudioTech"
                            // Optional: Add an onClick event handler
                            onClick={() => alert("Vist Us")}
                          />
                          {/* Child components, like markers or shapes, can be added here */}
                        </GoogleMap>
                      </LoadScript>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>

      {/*=============================================
        Start Footer
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
