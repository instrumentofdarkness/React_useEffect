import "./App.css";
import React, { useState, useEffect } from "react";

const url = "https://fakestoreapi.com/products";

// fetch data from the url

// 2nd way: use axios library

function App() {
  const [data, setData] = useState([]);
// for React: the state changes from empty array to data after fetching data from API


  // 1st way: use fetch
useEffect(() => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
}, [productId]);

getData();
// useEffect: run the function getData() only once
// if we don't use useEffect, the function getData() will run infinitely
// because every time the state changes, the function getData() will run again
// and the state changes again, and the function getData() will run again and again
// []: dependency

  return (
    <div className="App">
      <h1>React hook: useEffect</h1>
      <h2>Fetch data from API</h2>
      {data.map((item) => item.title)}
    </div>
  );
}

export default App;
