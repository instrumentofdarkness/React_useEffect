import "./App.css";
import React from "react";

import ProductList from "./components/product/productList";
import CountryList from "./components/country/countryList";

function App() {
  return (
    <div className="App">
      <ProductList />
      <CountryList />
    </div>
  );
}

export default App;
