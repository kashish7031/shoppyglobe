// src/pages/ProductDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useFetch from "../hooks/useFetch";
import { addToCart } from "../store/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  if (loading) return <div className="loader">Loading product...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!product) return <p className="error-message">Product not found.</p>;

  return (
    <div className="product-detail-container">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-detail-image"
        loading="lazy"
      />
      <div className="product-detail-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="product-price">${product.price}</p>
        <p>Rating: {product.rating} / 5</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="btn"
        >
          Add to Cart
        </button>
        <Link to="/" className="btn btn-secondary" style={{ marginLeft: "1rem" }}>
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
