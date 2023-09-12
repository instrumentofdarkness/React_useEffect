import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductList from "./components/product/ProductList";
import ProductSearch from "./components/search/ProductSearch";
import CountryList from "./components/country/CountryList";
import CountrySearch from "./components/search/CountrySearch";

const productsUrl = "https://fakestoreapi.com/products";
const countriesUrl = "https://restcountries.com/v3.1/all";

function App() {
  const [products, setProducts] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProduct() {
    const response = await fetch(productsUrl);
    const data = await response.json();
    setIsLoading(false);
    setProducts(data);
  }
  useEffect(() => {
    getProduct();
  }, []);

  function getCountries() {
    axios
      .get(countriesUrl)
      .then((response) => response.data)
      .then((countries) => {
        setIsLoading(false);
        setCountries(countries);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getCountries();
  }, []);
console.log (countries,"countries App")
  const twentyCountries = countries.slice(0, 20);
  // display 20 countries instead of all countries
  
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <h1>PRODUCTS</h1>
        <ProductSearch products={products} />
        <ProductList products={products}/>
        <hr />
        <h1>COUNTRIES</h1>
        <CountrySearch countries={twentyCountries} />
        <CountryList countries={twentyCountries}/>
      </div>
    );
  }
}

export default App;
