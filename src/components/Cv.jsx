import { useState } from "react";
import "../styles/Cv.css";

export function CV({ cvdata }) {
  return (
    <div className="CV">
      <CVCard data={cvdata} />
    </div>
  );
}

function ExperenceCard({ mydata }) {
  if (mydata?.experence) {
    return mydata.experence.map((entry) => (
      <div key={entry.id} className="educationCard">
        <div>{entry.job}</div>
        <div>{entry.title}</div>
        <div className="datesCV">
          <div>Start Date: {entry.start}</div>
          <div>End Date: {entry.end}</div>
        </div>
      </div>
      // id: crypto.randomUUID(),
      // job: "",
      // title: "",
      // start: "",
      // end: "",
    ));
  }
  return null;
}

function EducationCard({ mydata }) {
  if (mydata?.education) {
    return mydata.education.map((entry) => (
      <div key={entry.id} className="educationCard">
        <div>{entry.school}</div>
        <div className="datesCV">
          <div>Start Date: {entry.start}</div>
          <div>End Date: {entry.end}</div>
        </div>
      </div>
    ));
  }
  return null;
}

function CVCard({ data }) {
  return (
    <div className="CVCard">
      <div className="header">
        <h2>
          {data.name} {data.lastName}
        </h2>
        <p>
          {data.address}
          {data.city?.length > 0 && ","} {data.city}
          {data.state?.length > 0 && ","} {data.state} {data.zip}
        </p>
      </div>

      {data.education?.length > 0 && (
        <>
          <div className="education">
            <div className="sectionHeader">Education</div>
            <EducationCard mydata={data} />
          </div>
        </>
      )}
      {data.experence?.length > 0 && (
        <>
          <div className="experence">
            <div className="sectionHeader">Work Experence</div>
            <ExperenceCard mydata={data} />
          </div>
        </>
      )}
    </div>
  );
}

export default CV;
