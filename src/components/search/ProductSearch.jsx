import React, {useState} from "react";

export default function SearchFormProduct({ onSearch }) {
  function handleSubmit(event) {
    onSearch(event.target.value);
  return (
    <div>
      <form>
        <label>
          Please enter the product name:
          <input
            type="text"
            placeholder="Search"
            name="search"
            onChange={handleSubmit}
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
  );
}
}
