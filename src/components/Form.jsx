import { useState } from "react";
import "../styles/form.css";

export function Form({ cvdata, setcvdata }) {
  console.log(cvdata);
  return (
    <div className="mainForm">
      <form action="get">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="John" />
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Doe" />
        </div>

        <div>
          <label htmlFor="address">address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="12345 East 161st Ave"
          />

          <label htmlFor="city">city</label>
          <input type="text" id="city" name="city" placeholder="Denver" />
        </div>

        <div>
          <label htmlFor="state">state</label>
          <input type="text" id="state" name="state" placeholder="CO" />

          <label htmlFor="zip">zip</label>
          <input type="text" id="zip" name="zip" placeholder="90210" />
        </div>
      </form>
    </div>
  );
}

export default Form;
