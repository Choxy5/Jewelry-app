import React from 'react';
import './ShopSection.css';
import necklaces from '../../assets/images/necklaces.jpg';
import earrings from '../../assets/images/earrings.jpg';
import rings from '../../assets/images/rings.jpg';
import bracelets from '../../assets/images/bracelets.jpg';

import { Link } from 'react-router-dom';

function ShopSection() {
  return (
    <div className="container_shop">
      <div className="gallery-container item-1">
        <Link to="/products">
          <div className="gallery-item ">
            <div className="image">
              <img src={necklaces} alt="necklaces" />
            </div>
            <div className="text">Necklaces</div>
          </div>
        </Link>
      </div>

      <div className="gallery-container item-2">
      <Link to="/products">
        <div className="gallery-item">
          <div className="image ">
            <img src={earrings} alt="earrings" />
          </div>
          <div className="text">Earrings</div>
        </div>
        </Link>
      </div>

      <div className="gallery-container item-3">
      <Link to="/products">
        <div className="gallery-item">
          <div className="image">
            <img src={rings} alt="rings" />
          </div>
          <div className="text">Rings</div>
        </div>
        </Link>
      </div>

      <div className="gallery-container item-4">
      <Link to="/products">
        <div className="gallery-item">
          <div className="image">
            <img src={bracelets} alt="bracelets" />
          </div>
          <div className="text">Bracelets</div>
        </div>
      </Link>
      </div>
    </div>
  );
}

export default ShopSection;
