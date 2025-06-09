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
