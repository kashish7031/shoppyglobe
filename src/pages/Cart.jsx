// src/pages/Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../store/cartSlice';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart is Empty</h2>
        <Link to="/" className="btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items-list">
        {/* Render the list of cart items */}
        {cartItems.map(item => (
          <CartItem 
            key={item.id} // Unique key 
            item={item} 
          />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${cartTotal.toFixed(2)}</h3>
        <Link to="/checkout" className="btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
