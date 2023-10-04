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
        </label>
      </form>
    </div>
  );
}
