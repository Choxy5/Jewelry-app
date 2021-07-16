import React from 'react';
import './ContactSection.css';
import img from '../../assets/images/contact.jpg';

function ContactSection() {
  return (
    <div className="contactSection">
      <img src={img} alt="contact" />
      <button>Subscribe</button>
    </div>
  );
}

export default ContactSection;
