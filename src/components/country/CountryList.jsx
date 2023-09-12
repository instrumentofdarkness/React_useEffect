import React from "react";
import CountryItem from "./CountryItem";

export default function CountryList({ countries }) {
  console.log(countries, "countries");
  return (
    <div className="countries">
      {countries.map((country) => (
        <CountryItem key={country.name.common} country={country} />
      ))}
    </div>
  );
}
