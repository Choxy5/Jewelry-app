import React from 'react';
import './Homepage.css';
import img from '../../assets/images/hero.jpg';
import Navbar from '../Navbar/Navbar';
import ShopSection from '../ShopSection/ShopSection';
import AboutSection from '../AboutSection/AboutSection';
import ContactSection from '../ContactSection/ContactSection';
import FooterSection from '../FooterSection/FooterSection';
import Cart from '../Cart/Cart';

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Cart />
      <div className="homepage_color">
        <div className="color_left"></div>

        <div className="color_right"></div>
      </div>

      <div className="container">
        <div className="header">
          <h1>
            Find your <br /> perfect one
          </h1>
          <p>
            With thousands of dazzling designs, you're sure to find
            <br /> the perfect piece for your individual taste and unique style.
          </p>
          <div className="button">
            <button>EXPLORE</button>
          </div>
        </div>

        <div className="right_container">
          <img src={img} alt="" />
        </div>
      </div>
      <ShopSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Homepage;
