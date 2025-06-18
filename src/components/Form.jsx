import { useState } from "react";
import "../styles/form.css";
// let testcvdata = { Name: "triston" };
// let educationObject = [{ school: "", start: "", end: "" }];

// testcvdata = { ...testcvdata, educationObject };
// console.log({ testcvdata });
// testcvdata.educationObject.pop();

function formEducation({ cvdata, setCVData }) {
  function updateEducation(e) {
    let text = e.target.value;
    setCVData((prev) => {
      let neweducation = [];
      prev.education.forEach((element) => {
        neweducation.push(element);
      });
      neweducation.forEach((element) => {
        // probably could just get the target element and return it instead of
        // remaking new education but doesnt seem like a big deal to me and
        // this was feels easier to read
        if (element.id == e.target.dataset.id) {
          switch (e.target.name) {
            case "school":
              element.school = text;
              break;
            case "startDate":
              element.start = text;
              break;
            case "endDate":
              element.end = text;
              break;
            default:
              break;
          }
        }
      });
      return { ...prev, education: neweducation };
    });
  }

  function removeEducation(e) {
    const idToRemove = e.target.dataset.id;
    setCVData((prev) => {
      const newdata = prev.education.filter((entry) => {
        return entry.id != idToRemove;
      });

      return { ...prev, education: newdata };
    });
  }
  function addEducation() {
    setCVData((prev) => {
      let newobject = {
        id: crypto.randomUUID(),
        school: "",
        start: "",
        end: "",
      };
      let oldObject = [];
      if (prev.education) {
        for (let index = 0; index < prev.education.length; index++) {
          oldObject.push(prev.education[index]);
        }
        oldObject.push(newobject);
      } else {
        oldObject.push(newobject);
      }
      return { ...prev, education: oldObject };
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
      {cvdata.education.map((education) => {
        return (
          <div key={education.id} className="schoolInfo">
            <h2>education</h2>{" "}
            <button data-id={education.id} onClick={removeEducation}>
              remove
            </button>
            <form action="get">
              <h2>Contact Info</h2>
              <div>
                <label htmlFor="school">School</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  placeholder="Harvard"
                  data-id={education.id}
                  onChange={updateEducation}
                />

                <label htmlFor="startDate">Start</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  data-id={education.id}
                  onChange={updateEducation}
                />

                <label htmlFor="endDate">End</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  data-id={education.id}
                  onChange={updateEducation}
                />
              </div>
            </form>
          </div>
        );
      })}
    </>
  );
}

export function Form({ cvdata, setCVData }) {
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
