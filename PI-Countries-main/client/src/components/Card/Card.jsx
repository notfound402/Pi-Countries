import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ id, name, flags, continents, population }) => {
  return (
    <div className="main-card-container">
      <img className="img" src={flags} alt="not found" />
      <div className="text-container">
        <h2>{name}</h2>
        <h3>{continents}</h3>
        <p> Poblation: {population}</p>
        <br />
        <br />
        <Link to={`/countries/${id}`}>
          <button className="main-filter-button">See more!</button>
        </Link>
      </div>
    </div>
  );
};
