import React from "react";

export default function ProductItem({ product}) {
  return <div>
    <h3>{product.title}</h3>
    <p>{product.price}</p>
    <p>{product.description}</p>
    <img src={product.image} alt={product.title} />
  </div>;
}
