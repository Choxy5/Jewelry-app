import React, { useContext } from 'react';
import './CartItem.css';
import CartContext from '../Context/Cart/cartContext';
import formatCurrency from 'format-currency';

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  let opts = { format: '%s%v', symbol: '€' };

  return (
    <li className="cartItem-item">
      <img src={item.image} alt="" />
      <div>
        {item.name} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className="cartItem-button" onClick={() => removeItem(item._id)}>
        Remove Item
      </button>
    </li>
  );
}

export default CartItem;
