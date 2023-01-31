import React from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import { useState } from "react";
import { useSelector } from "react-redux";
import {orderByName} from '../../redux/actions'
import {filterContinent} from '../../redux/actions'
import { filterCountryByPopulation } from "../../redux/actions";
import './filters.css'

export const Filters = () => {
    const [, setInOrder] = useState("");
	const [, setOrden] = useState("");
	// const allCountry = useSelector(state => state.countries);
	// const [currentPage, setCurrentPage] = useState(1);
	// const [countriesPerPage] = useState(10);
	// const indexOfLastCountry = currentPage * countriesPerPage;
	// const indexOfFirsCountry = indexOfLastCountry - countriesPerPage;
	// const currentCountry = allCountry.slice(
	// 	indexOfFirsCountry,
	// 	indexOfLastCountry
	// );
  const dispatch = useDispatch();

  function handleFilterContinent(e) {
    if (e.target.value === "All") {
        dispatch(getCountries());
    } else {
        dispatch(filterContinent(e.target.value));
        // setCurrentPage(1);
    }
}


  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getCountries());
  };

  function handleSort(e) {
    e.preventDefault();
    if (e.target.value === "all") {
      dispatch(getCountries());
    } else {
      dispatch(orderByName(e.target.value));
      // setCurrentPage(1);
      setOrden(`Ordenado ${e.target.value}`);
    }
  }

  function handleSortPopulation(e) {
    e.preventDefault();
    if (e.target.value === "all") {
      dispatch(getCountries());
    } else {
      dispatch(filterCountryByPopulation(e.target.value));
      // setCurrentPage(1);
      setInOrder(`Ordenado ${e.target.value}`);
    }
  }

  return (
    <div className="filtrados">
      <button className="main-filter-button"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Refresh countries
      </button>

      <select className="main-select"
        onChange={(e) => {
          handleSort(e);
        }}
      >
        <option default value="all">Order</option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>

      <select className="main-select" onChange={(e) => handleFilterContinent(e)}>
        <option default value="All">Continent</option>
        <option value="Africa">África</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antartica</option>
      </select>
      <select className="main-select" onChange={(e) => handleSortPopulation(e)}>
        <option default  value="all">Population</option>
        <option value="menor">Least populated</option>
        <option value="mayor">More populated</option>
      </select>
    </div>
  );
};
