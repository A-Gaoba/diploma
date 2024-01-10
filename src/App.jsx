import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Sidebar />
    </Router>
  );
};

export default App;
