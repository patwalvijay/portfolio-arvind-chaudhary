import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactComp from "../components/ContactComp";
import FaqComp from "../components/FaqComp";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-24">
        <ContactComp />
      </div>

      <FaqComp />

      <Footer />
    </div>
  );
};

export default ContactPage;
