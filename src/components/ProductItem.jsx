// src/components/ProductItem.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="product-item">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
        loading="lazy"
      />
      <h3>
        {product.title.length > 30
          ? product.title.slice(0, 27) + "..."
          : product.title}
      </h3>
      <p>${product.price}</p>
      <div className="product-item-actions">
        <Link to={`/product/${product.id}`} className="btn btn-secondary">
          View Details
        </Link>
        <button onClick={handleAddToCart} className="btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
