import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({
  products,
  searchTerm,
  filteredProducts,
}) {
  if (!searchTerm) {
    return (
      <div className="products">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
