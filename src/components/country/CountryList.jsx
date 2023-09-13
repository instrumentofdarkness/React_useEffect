import React from "react";
import CountryItem from "./CountryItem";

export default function CountryList({
  countries,
  searchTerm,
  filteredCountries,
}) {
  if (!searchTerm) {
    return (
      <div className="countries">
        {countries.map((country) => {
          return <CountryItem key={country.name.common} country={country} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="countries">
        {filteredCountries.map((country) => {
          return <CountryItem key={country.name.common} country={country} />;
        })}
      </div>
    );
  }
}
