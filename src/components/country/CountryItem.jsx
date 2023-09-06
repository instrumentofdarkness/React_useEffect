import React from "react";

export default function CountryItem({ item }) {
  return (
    <div>
      <h1>{item.name.common}</h1>
      <img src={item.flag} alt={item.name} />
      <p>{item.capital}</p>
      <p>{item.region}</p>
      <p>{item.subregion}</p>
      <p>{item.population}</p>
      <a href={item.maps.googleMaps} target="_blank"
      >view in Google Maps</a>
    </div>
  );
}

