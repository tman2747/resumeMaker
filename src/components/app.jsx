import { useState } from "react";
import Form from "./Form.jsx";
import CV from "./Cv.jsx";

export function App() {
  const [cvdata, setCVData] = useState({});
  return (
    <div className="content">
      <Form cvdata={cvdata} setCVData={setCVData} />
      <CV cvdata={cvdata} />
    </div>
  );
}

export default App;
