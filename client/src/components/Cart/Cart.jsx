import React, { useContext } from 'react';
import './Cart.css';
import CartContext from '../Context/Cart/cartContext';
import formatCurrency from 'format-currency';
import CartItem from '../CartItem/CartItem';

function Cart() {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  let opts = { format: '%s%v', symbol: '€' };

  return (
    <>
      {showCart && (
        <div className="cart-wrapper">
          <div style={{ textAlign: 'right' }}>
            <i
              style={{ cursor: 'pointer' }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="cart-innerWrapper">
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="cart-total">
            <div>Cart Total</div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => item.price + amount, 0),
                opts
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
