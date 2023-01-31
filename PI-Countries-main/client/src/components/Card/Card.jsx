import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ id, name, flags, continents,population }) => {
  return (
    <div className="main-card-container">
      <div className="front-container">
        <img  className ='img' src={flags} alt="not found" />
      </div>
      <div className="text-container">
        <h2>{name}</h2>
        <h3>{continents}</h3>
        <p> Poblation: {population}</p>
        <Link to={`/countries/${id}`}>
        <button className="link"> 
          See more!
        </button>
        </Link>

      </div>
    </div>
  );
};
