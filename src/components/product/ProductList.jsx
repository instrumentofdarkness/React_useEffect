import React, {useState,useEffect} from "react";
// import axios from "axios";
import ProductItem from "./ProductItem";

const url = "https://fakestoreapi.com/products";

// fetch data from the url
export default function ProductList() {
  const [data, setData] = useState([]);
  // for React: the state changes from empty array to data after fetching data from API
  const [isLoading, setIsLoading] = useState(true);
  // 1st way: use fetch

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // change the isLoading state to false
  //       setIsLoading(false);
  //       setData(data);
  //     })

  //     .catch((error) => console.log(error));
  // }, []);

  // using async/await
  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  }
  useEffect(() => {
    getData();
  }, []);

  // 2nd way: use axios library
  // function getData() {
  //   axios
  //     .get(url)
  //     .then((response) => response.data)
  //     .then((data) => {
  //       setIsLoading(false);
  //       setData(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }

  // message on the screen: the data is loading

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    // useEffect: run the function getData() only once
    // if we don't use useEffect, the function getData() will run infinitely
    // because every time the state changes, the function getData() will run again
    // and the state changes again, and the function getData() will run again and again
    // []: dependency


    
  return <div>
    <h1>Product List</h1>

    {data.map((item) => item.title)}
    <ProductItem />
    </div>;
  }
}