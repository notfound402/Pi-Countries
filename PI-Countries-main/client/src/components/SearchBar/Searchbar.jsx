import React from "react";
import { useDispatch } from "react-redux";
import { getCountryName } from "../../redux/actions";
import { useState } from "react";
import "./searchbar.css";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      alert("Write a country name");
    }

    dispatch(getCountryName(name));
    setName("");
  }
  return (
    <div>
      <div>
        <form className="search-nav" onSubmit={handleSubmit}>
          <input
            className="main-input"
            type="text"
            placeholder="Search country"
            onChange={(e) => handleInputChange(e)}
            value={name}
          />
          <input
            className="main-filter-button-s"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    </div>
  );
};
