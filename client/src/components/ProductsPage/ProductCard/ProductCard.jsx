import React from 'react';
import './ProductCard.css';
import formatCurrency from 'format-currency';
import Rating from '../../Rating/Rating';
import CartContext from '../../Context/Cart/cartContext';
import { useContext } from 'react';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  let opts = { format: '%s%v', symbol: '€' };

  return (
    <div className="productCard-wrapper">
      <div className="productCard-innerWrapper">
        <img className="productCard-img" src={product.image} alt="" />
        <div className="productCard-title">
          <h2>{product.name}</h2>
        </div>
        <div className="productCard-price">
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
        <div className="productCard-rating">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>

        <button
          className="productCard-button"
          onClick={() => addToCart(product)}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
