// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity 
} from '../store/cartSlice';

// This component represents a single item in the cart 
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => dispatch(decreaseQuantity(item))}>-</button> 
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
      </div>
      <button 
        onClick={() => dispatch(removeFromCart(item))} 
        className="btn btn-danger"
      >
        Remove
      </button> 
    </div>
  );
};

export default CartItem;
