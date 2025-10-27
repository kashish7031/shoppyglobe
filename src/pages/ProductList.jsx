// src/pages/ProductList.jsx
import React from "react";
import useFetch from "../hooks/useFetch";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../store/filterSlice";

const ProductList = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const searchTerm = useSelector(selectSearchTerm).toLowerCase();

  if (loading) return <p className="loader">Loading products...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;
  if (!data || !data.products) return <p>No products available</p>;

  const filtered = data.products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="product-list">
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No matching products found.</p>
      )}
    </div>
  );
};

export default ProductList;
