import React from "react";

export default function ProductItem({ product }) {
  return <div>
    <h1>{product.title}</h1>
    <img src={product.image} alt={product.title} height="90px"/>
    <p>{product.description}</p>
    <p>{product.price}</p>
  </div>;
}
