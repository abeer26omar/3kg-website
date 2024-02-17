import React from "react";
import Preview from "../views/Preview";
// Homepage Demo
import HomeDefault from "../views/all-home-version/HomeDefault";
// Service
import Service from "../views/inner-pages/service/Service";
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";

// About
import AboutUs from "../views/inner-pages/about/AboutUs";
import AboutMe from "../views/inner-pages/about/AboutMe";

// Blog
import BlogGrid from "../views/inner-pages/blog/BlogGrid";
import BlogMasonry from "../views/inner-pages/blog/BlogMasonry";
import BlogSidebar from "../views/inner-pages/blog/BlogSidebar";
import BlogDetails from "../views/inner-pages/blog/BlogDetails";
import BlogDetailsSidebar from "../views/inner-pages/blog/BlogDetailsSidebar";

// Portfolio
import WorksGrid from "../views/inner-pages/portfolio/WorksGrid";
import WorksMasonry from "../views/inner-pages/portfolio/WorksMasonry";
import WorksListing from "../views/inner-pages/portfolio/WorksListing";
import WorksCarousel from "../views/inner-pages/portfolio/WorksCarousel";
import WorksShowcase from "../views/inner-pages/portfolio/WorksShowcase";

// Others
import Contact from "../views/inner-pages/Contact";
import PricingInner from "../views/inner-pages/PricingInner";
import Team from "../views/inner-pages/Team";
import ComingSoon from "../views/inner-pages/ComingSoon";
import Faq from "../views/inner-pages/Faq";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomeDefault />} />
        {/* Service */}
        <Route path="/service" element={<Service />} />
        {/* <Route path="/service-details" element={<ServiceDetails />} /> */}

        {/* About */}
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/about-me" element={<AboutMe />} /> */}

        {/* Blog */}
        <Route path="/projects" element={<BlogMasonry />} />
        <Route path="/news" element={<BlogGrid />} />
        <Route path="/news-details/:id" element={<BlogDetails />} />
        {/* <Route path="/blog-sidebar" element={<BlogSidebar />} />
        <Route path="/blog-details-sidebar" element={<BlogDetailsSidebar />} /> */}

        {/* Portfolio */}
        <Route path="/case-studies" element={<WorksGrid />} />
        <Route path="/case-details/:id" element={<WorksShowcase />} />
        {/* <Route path="/works-masonry" element={<WorksMasonry />} />
        <Route path="/works-listing" element={<WorksListing />} />
        <Route path="/works-carousel" element={<WorksCarousel />} /> */}

        {/* others */}
        {/* <Route path="/team" element={<Team />} /> */}
        {/* <Route path="/pricing" element={<PricingInner />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
