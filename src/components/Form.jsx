import { useState } from "react";
import "../styles/form.css";

// let education = {school: name, start: date, end: date}

function formEducation({ cvdata, setCVData }) {
  const { education, value } = [];
  function removeEducation() {
    setCVData((prev) => ({
      ...prev,
      education: null,
    }));
  }
  function addEducation() {
    setCVData((prev) => {
      console.log(prev);
      let date = "12/12/12";
      return { ...prev, education: [{ school: name, start: date, end: date }] };
    });
  }

  if (!cvdata.education) {
    return (
      <div>
        add education <button onClick={addEducation}>+</button>
      </div>
    );
  }
  return (
    <>
      <div>
        add another <button onClick={addEducation}>+</button>
      </div>
      {cvdata.education.map((element, index) => console.log())}
      <div className="schoolInfo">
        <h2>education</h2> <button onClick={removeEducation}>remove</button>
        <form action="get">
          <h2>Contact Info</h2>
          <div>
            <label htmlFor="school">School</label>
            <input
              type="text"
              id="school"
              name="school"
              placeholder="Harvard"
            />

            <label htmlFor="startDate">Start</label>
            <input type="date" id="startDate" name="startDate" />

            <label htmlFor="endDate">End</label>
            <input type="date" id="endDate" name="endDate" />
          </div>
        </form>
      </div>
    </>
  );
}

export function Form({ cvdata, setCVData }) {
  console.log({ cvdata });
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
