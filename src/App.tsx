import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AmortizationTable from "./components/AmortizationTable";
import Home from "./components/Home";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<AmortizationTable />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
