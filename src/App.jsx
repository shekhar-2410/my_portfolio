/* eslint-disable no-unused-vars */
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/pages/Landingpage";
import Resume from "./components/pages/Resume";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
