import React from "react";
import "./paginate.css";
export default function Paginate({ countriesPerPage, paginate, allCountry }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountry / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="pagination">
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <button
                className="number"
                key={number}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            );
          })}
      </div>
    </div>
  );
}
