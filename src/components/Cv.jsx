import { useState } from "react";
import "../styles/Cv.css";

export function CV({ cvdata }) {
  return (
    <div className="CV">
      name is :{cvdata.name}
      <CVCard />
    </div>
  );
}

function CVCard() {
  return (
    <div className="CVCard">
      <div className="header">
        <h2>Triston land</h2>
        <p>Address 1234, brighton,co,80602</p>
      </div>
    </div>
  );
}

export default CV;
