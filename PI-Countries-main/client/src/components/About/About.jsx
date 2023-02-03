import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import img from "../../foundations/about.jpg";
export default function About() {
  return (

    
    <div className="main-container-about">
      <div className="sub-container-about">
        <div className="info-container-about">
          <div className="img-container-about">
            <img className="img-about" src={img} alt="not found "></img>
          </div>
          <div className="title-container-about">
            <h2 className="h2-about">Martin Acosta</h2>
          </div>
          <div className="description-container-about">
            <h4 className="h4-about">
              Desarrollador full stack en curso : Conociendo la programacion
              cuasi por accidente , con estudios previos en Ingenieria .
            </h4>
            <div className="button-back">
              <Link to="/home">
                <h4 className="h4bu">Back</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
