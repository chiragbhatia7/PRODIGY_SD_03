import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AddContact from "./contacts/AddContact";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addContact" element={<AddContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
