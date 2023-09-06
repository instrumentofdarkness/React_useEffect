import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductList from "./components/product/ProductList";
import CountryList from "./components/country/CountryList";

const productsUrl = "https://fakestoreapi.com/products";
const countriesUrl = "https://restcountries.eu/rest/v3.1/all";

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
      .then((response) => response.json())
      .then((countries) => {
        setIsLoading(false);
        setCountries(countries);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getCountries();
  }, []);

  const twentyCountries = countries.slice(0, 20);
  // display 20 countries instead of all countries
  const displayCountries = twentyCountries.map((country) => (
    <CountryList key={country.name} country={country} />
  ));

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <h1>Homework 1</h1>
        <ProductList />
        <hr />
        <h1>Homework 2</h1>
        <CountryList />
      </div>
    );
  }
}

export default App;
