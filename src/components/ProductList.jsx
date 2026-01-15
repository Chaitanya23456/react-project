import React from "react";
import useFetch from "../hooks/useFetch"

const ProductList = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

   if (loading)
    return (
        <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Products...</p>
        </div>
    );

  if (error) return <h2 className="error">Error: {error}</h2>;

  return (
    <div>
      <h1 className="title">Products List</h1>

      <div className="product-container">
        {data?.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.images[0]}
              alt={product.title}
              className="product-img"
              loading="lazy"
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
