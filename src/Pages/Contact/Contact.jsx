import React from "react";
import Footer from "../../Components/Footer/Footer";
import ContactHero from "../../Components/ContactHero/ContactHero";
import "./Contact.css";


const Contact = () => {
  return (
    <div className="contact-page">
       { <div className="overlay"></div> }
        <ContactHero />
        
      <Footer />
    </div>
  );
};

export default Contact;