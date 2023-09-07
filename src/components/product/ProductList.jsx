import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({products}) {
  return (
    <div className="products" >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      
    </div>
  );
}
