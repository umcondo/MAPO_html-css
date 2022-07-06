// components

import { Route, Routes } from "react-router";
import App2 from "./App2";
import SwrTest from "./SwrTest";
import SWRTest2 from "./SWRTest2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/state" element={<App2 />} />
        <Route path="/swr" element={<SwrTest />} />
        <Route path="/" element={<SWRTest2 />} />
      </Routes>
    </div>
  );
}

export default App;
