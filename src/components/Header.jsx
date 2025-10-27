// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItemCount } from "../store/cartSlice";
import { setSearchTerm, selectSearchTerm } from "../store/filterSlice";

const Header = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemCount);
  const searchTerm = useSelector(selectSearchTerm);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        ShoppyGlobe
      </NavLink>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <nav className="navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart <span className="cart-count">{itemCount}</span>
        </NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
      </nav>
    </header>
  );
};

export default Header;
