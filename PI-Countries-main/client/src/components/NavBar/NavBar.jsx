import react from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="main-container-nav">
      <Link to="/home">
        <button className="main-filter-button"> Home</button>
      </Link>
      <Link to="/create">
        <button className="main-filter-button"> Create Activity</button>
      </Link>
      <Link to="/about">
        {" "}
        <button className="main-filter-button"> About</button>
      </Link>
    </div>
  );
};
