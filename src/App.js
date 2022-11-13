import LandingPage from "./layouts";
import { useState } from "react";
import { qaJson } from "./constants/qa";
import { QaContext } from "./service/QaContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./components/result/result";

function App() {
  const [qa, setQa] = useState(qaJson);
  const [qaIndex, setQaIndex] = useState(0);
  const [selectedOptions, setselectedOptions] = useState([]);
  return (
    <QaContext.Provider
      value={{
        qa: qa,
        setQa: setQa,
        qaIndex: qaIndex,
        setQaIndex: setQaIndex,
        selectedOptions: selectedOptions,
        setselectedOptions: setselectedOptions,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </QaContext.Provider>
  );
}

export default App;
