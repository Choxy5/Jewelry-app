import React from 'react';
import './AboutSection.css';
import img from '../../assets/images/necklaces-about.jpg';

function AboutSection() {
  return (
    <div className="aboutSection">
      <div className="leftSection">
        <div className="aboutContent">
          <h3>About Us</h3>
          <span>2016</span>
          <h2>
            5 years of experience <br /> in Jewelry Manufacturing
          </h2>
          <p className='aboutTop'>
            "Jewelry is a special thing which makes your look accomplished{' '}
            <br /> and individual regardless of style."
          </p>
          <p>
            We are a fashion-forward jewellery brand that caters to every woman,{' '}
            <br /> with 150 new styles being delivered to stores each week. We
            give <br /> exceptional customer service and apply out core belief,
            it's about her, <br /> always to everthing we do.
          </p>
        </div>
      </div>

      <div className="rightSection">
        <div className="rightImg">

        <img src={img} alt="about" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
