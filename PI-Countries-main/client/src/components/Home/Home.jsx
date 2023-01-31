import React from "react";
import { SearchBar } from "../SearchBar/Searchbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavBar } from "../NavBar/NavBar";
import Paginate from "../Paginate/Paginate.jsx";
import { Filters } from "../Filters/filters";
import { Card } from "../../components/Card/Card";

import "./home.css";
export default function Home() {
  const allCountry = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(9);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirsCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountry.slice(
    indexOfFirsCountry,
    indexOfLastCountry
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main-container">

      <div className="main-nav">
          <NavBar />
          <SearchBar />
      </div>
      <div className="main-body">
                <div className="main-filters">
                    <Filters />
                    <Paginate
                    countriesPerPage={countriesPerPage}
                    allCountry={allCountry.length}
                    paginate={paginate}
                    />
              </div>
        <div className="cards">
            {currentCountries?.map((x) => {
              return (
                <div key={x.id}>
                  <Card
                    id={x.id}
                    name={x.name}
                    continents={x.continent}
                    flags={x.imagen}
                    population={x.population}
                  />
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
}
