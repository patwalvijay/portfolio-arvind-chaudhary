import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedInput from "../components/TrustedInput";
import Footer from "../components/Footer";
import WhatWeTreat from "../components/WhatWeTreat";
import DoctorAbout from "../components/DoctorAbout";
import TreatMentComp from "../components/TreatMentComp";
import GalleryComp from "../components/GalleryComp";
import Testimonial from "../components/Testimonial";
import BlogComp from "../components/BlogComp";
import FaqComp from "../components/FaqComp";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <DoctorAbout />
      <TreatMentComp />
      <GalleryComp />
      <TrustedInput />
      <Testimonial />
      <BlogComp />
      <FaqComp />
      {/* <WhatWeTreat /> */}
      <Footer />
    </>
  );
};

export default Home;
