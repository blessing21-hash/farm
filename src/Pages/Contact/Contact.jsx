import React from "react";
import Footer from "../../Components/Footer/Footer";
import ContactHero from "../../Components/ContactHero/ContactHero";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import ContactSection from "../../Components/ContactSection/ContactSection";
import "./Contact.css";
import ImageRow from "../../Components/ImageRow/ImageRow";


const Contact = () => {
  return (
    <div className="contact-page">
       { <div className="overlay"></div> }
        <ContactHero />
        <ContactInfo />
        <ContactSection />
        <ImageRow />
      <Footer />
    </div>
  );
};

export default Contact;