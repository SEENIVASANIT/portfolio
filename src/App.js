import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
const MainPage = React.lazy(() => import("./page/MainPortfolio"));
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/portfolio" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
