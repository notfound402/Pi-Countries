import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cards.css";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";

const Cards = () => {
  const totalcountries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  return (
    <div className="main-container-cards">
      {totalcountries &&
        totalcountries.map((x) => {
          return (
            <Link to={`/countries/${x.id}`}>
              <Card
                id={x.id}
                name={x.name}
                flags={x.flags}
                continents={x.continent}
              />
            </Link>
          );
        })}
    </div>
  );
};
export default Cards;
