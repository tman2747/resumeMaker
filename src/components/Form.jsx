import { useState } from "react";
import "../styles/form.css";

function formEducation(cvdata, setCVData) {
  return (
    <div>
      <h2>education</h2>
    </div>
  );
}

export function Form({ cvdata, setCVData }) {
  console.log(cvdata);
  function updateCV(e) {
    const { name, value } = e.target;
    setCVData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="mainForm">
      <form action="get">
        <div className="contactInfo">
          <h2>Contact Info</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John"
              onChange={updateCV}
              value={cvdata.name || ""}
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              onChange={updateCV}
            />
          </div>
          <div>
            <label htmlFor="address">address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="12345 East 161st Ave"
              onChange={updateCV}
            />
            <label htmlFor="city">city</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Denver"
              onChange={updateCV}
            />
          </div>
          <div>
            <label htmlFor="state">state</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="CO"
              onChange={updateCV}
            />
            <label htmlFor="zip">zip</label>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="90210"
              onChange={updateCV}
            />
          </div>
        </div>
      </form>
      {formEducation({ cvdata, setCVData })}
    </div>
  );
}

export default Form;
