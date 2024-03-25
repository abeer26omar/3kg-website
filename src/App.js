import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });
  }, []);
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <Helmet>
          <title>Audio Technology</title>
          <meta name="description" content="Audio Technology is proud to be the sole distributor of a variety of internationally acclaimed brands in Egypt, such as renowned Bose, JBL, Pioneer DJ, Shure and Harman Professional." />
          <meta
            name="keywords"
            description='Audio Technology is proud to be the sole distributor of a variety of internationally acclaimed brands in Egypt, such as renowned Bose, JBL, Pioneer DJ, Shure and Harman Professional.'
          />
        </Helmet>
        {/* End React Helmet for SEO */}

        {/* <AnimatedCursor
          innerSize={8}
          outerSize={44}
          color="220, 53, 69"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.2}
        /> */}
        {/* End Animated Cursor */}

        <ScrollToTop />
        {/* End Scroll To Top */}

        <AllRoutes />
        {/* End All Routes */}
      </QueryClientProvider>
    </>
  );
};

export default App;
