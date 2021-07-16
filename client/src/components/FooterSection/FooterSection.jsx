import React from 'react';
import './FooterSection.css';
import img from '../../assets/images/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function FooterSection() {
  return (
    <div className="footerSection">
      <div className="footerContent">
        <div className="row">
          <img src={img} alt="" />
          <div className="info">
            <div className="col">
              <h2>Information</h2>
              <ul>
                <li>Events</li>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="col">
              <h2>Shop</h2>
              <ul>
                <li>Necklaces</li>
                <li>Earrings</li>
                <li>Rings</li>
                <li>Bracelets</li>
              </ul>
            </div>

            <div className="col">
              <h2>Address</h2>
              <ul>
                <li>New York City</li>
                <li>9146 Wood Street</li>
                <li>555-888-222</li>
                <li>jewelry@email.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="icons">
            <FacebookIcon className="facebook" />
            <InstagramIcon className="instagram" />
            <TwitterIcon className="twitter" />
          </div>
          <div className="footerMiddle">
            &copy;{new Date().getFullYear()} Kristijan Blazevic. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
