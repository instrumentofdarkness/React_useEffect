import React from "react";

export default function SearchFormCountry({ setSearchTerm }) {
  function handleSubmit(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div>
      <form>
        <label>
          Please enter the country name: <span className="search"> </span>
          <input
            type="text"
            placeholder="Search"
            name="search"
            onChange={handleSubmit}
          />
          <span className="search"> </span>
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
  );
}
