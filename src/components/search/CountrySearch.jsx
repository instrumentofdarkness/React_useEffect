import React from 'react'

export default function SearchFormCountry({ onSearch }) {
    function handleSubmit(event) {
      onSearch(event.target.value);
    }
    return (
      <div>
        <form>
          <label>
            Please enter the country name:
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