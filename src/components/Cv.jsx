import { useState } from "react";
import "../styles/Cv.css";

export function CV({ cvdata }) {
  return (
    <div className="CV">
      <CVCard data={cvdata} />
    </div>
  );
}

function CVCard({ data }) {
  if (
    data.address == null ||
    data.city == null ||
    data.address == "" ||
    data.city == ""
  ) {
    // im only doing this because i dont want the commas in if its blank. probably a better way of doing this without repeating code.
    return (
      <div className="CVCard">
        <div className="header">
          <h2>
            {data.name} {data.lastName}
          </h2>
          <p>
            {data.address} {data.city} {data.state} {data.zip}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="CVCard">
      <div className="header">
        <h2>
          {data.name} {data.lastName}
        </h2>
        <p>
          {data.address}, {data.city}, {data.state} {data.zip}
        </p>
      </div>
    </div>
  );
}

export default CV;
