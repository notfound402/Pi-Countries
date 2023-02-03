import React from "react";
import "./ActivityCards.css";
export function ActivityCards(activities) {
  return (
    <div >
      {activities && (
        <div className="limitante">
          <p>
            <b>Actividad : </b>
            {activities.name}
          </p>

          <p>
            <b>Dificultad : </b>
            {activities.difficulty}
          </p>
          <p>
            <b>Duracion : </b>
            {activities.duration} hs
          </p>
          <p>
            <b>Temporada : </b>
            {activities.season}
          </p>
        </div>
      )}
    </div>
  );
}
